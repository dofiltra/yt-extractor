import { OnResponseReceivedEndpoint } from '../types/comments/comments'
import { IYtSearchSuggesionItem } from '../types/extractor'
import { ItemSectionRendererContent, IYtSearchResponse } from '../types/search/search'
import { SingleColumnWatchNextResults } from '../types/video/video'

export function extractCommentsRenderer(onResponseReceivedEndpoints?: OnResponseReceivedEndpoint[]) {
  const slotId = 'RELOAD_CONTINUATION_SLOT_BODY'
  return (
    onResponseReceivedEndpoints
      ?.find((x) => x.reloadContinuationItemsCommand?.slot === slotId)
      ?.reloadContinuationItemsCommand?.continuationItems?.filter(
        (x) => x.commentThreadRenderer?.comment?.commentRenderer
      )
      .map((x) => x.commentThreadRenderer?.comment?.commentRenderer!) || []
  )
}

export function extractRelatedItems(singleColumnWatchNextResults?: SingleColumnWatchNextResults) {
  const sectionId = 'related-items'
  return (
    singleColumnWatchNextResults?.results?.results?.contents
      ?.find((x) => x.itemSectionRenderer?.sectionIdentifier === sectionId)
      ?.itemSectionRenderer?.contents?.filter((x) => x.videoWithContextRenderer)
      ?.map((x) => x.videoWithContextRenderer!) || []
  )
}

export function extractSearchResponse(searchResponse: IYtSearchResponse) {
  const result: ItemSectionRendererContent[] = []
  try {
    const itemSectionRenderer = searchResponse?.response?.contents?.sectionListRenderer?.contents?.find(
      (x) => x.itemSectionRenderer
    )?.itemSectionRenderer
    const sectionRender = itemSectionRenderer?.contents

    return { result: sectionRender || result }
  } catch (error) {
    return { result, error }
  }
}

export function extractSuggestions(suggestionResponseJson: string) {
  try {
    const dataJson = suggestionResponseJson.split('\n').sort((a, b) => b.length - a.length)[0]
    const data: any[] = JSON.parse(dataJson)
    const suggestionsArr = data.find((e) => Array.isArray(e))
    const suggesions: IYtSearchSuggesionItem[] = suggestionsArr.map((s: any[]) => {
      return {
        keyword: s[0],
        freq: s[1],
        sizes: s[2]
      } as IYtSearchSuggesionItem
    })

    return { result: suggesions }
  } catch (error) {
    return { error, result: [] }
  }
}
