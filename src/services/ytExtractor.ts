import { extractCommentsRenderer, extractRelatedItems, extractSearchResponse } from '../helpers/extractorHelpers'
import { YtExtractorResponse } from '../services/ytExtractorResponse'
import { CommentRenderer } from '../types/comments/comments'
import { TYtSearchOpts, TYtVideoOpts, TYtChannelOpts, TYtVideoResult, TYtSearchResult } from '../types/extractor'
import { FluffyVideoWithContextRenderer } from '../types/video/video'

class YtExtractor extends YtExtractorResponse {
  async video(opts: TYtVideoOpts) {
    const { result = { commentsResponse: {}, videoResponse: [] }, error } = await this.videoResponse(opts)

    if (error) {
      return { error }
    }

    const { playerResponse } = { ...result.videoResponse.find((tab) => tab.playerResponse) }
    const { response } = { ...result.videoResponse.find((tab) => tab.response) }
    const { onResponseReceivedEndpoints = [] } = { ...result.commentsResponse }

    const relatedItems: FluffyVideoWithContextRenderer[] = extractRelatedItems(
      response?.contents?.singleColumnWatchNextResults
    )
    const comments: CommentRenderer[] = extractCommentsRenderer(onResponseReceivedEndpoints)

    const resultExtract: TYtVideoResult = {
      videoDetails: playerResponse?.videoDetails,
      streamingData: playerResponse?.streamingData,
      captions: playerResponse?.captions,
      microformat: playerResponse?.microformat,

      relatedItems,
      comments
    }

    return { result: resultExtract }
  }

  async search(opts: TYtSearchOpts) {
    const { error, result = { searchResponse: {}, suggestions: [] } } = {
      ...(await this.searchResponse(opts))
    }

    if (error) {
      return { error }
    }

    const searchExtract: TYtSearchResult = {
      suggestions: result.suggestions,
      search: extractSearchResponse(result.searchResponse).result
    }

    return { result: searchExtract }
  }

  async channel(opts: TYtChannelOpts) {
    // TODO

    return { error: 'not implemented' }
  }
}

export { YtExtractor }
