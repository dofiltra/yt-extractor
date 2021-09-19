import { OnResponseReceivedEndpoint } from '../types/comments'
import { SingleColumnWatchNextResults } from '../types/video-m'

export function getCommentsRenderer(onResponseReceivedEndpoints?: OnResponseReceivedEndpoint[]) {
  return (
    onResponseReceivedEndpoints
      ?.find((x) => x.reloadContinuationItemsCommand?.slot === 'RELOAD_CONTINUATION_SLOT_BODY')
      ?.reloadContinuationItemsCommand?.continuationItems?.filter(
        (x) => x.commentThreadRenderer?.comment?.commentRenderer
      )
      .map((x) => x.commentThreadRenderer?.comment?.commentRenderer!) || []
  )
}

export function getRelatedItems(singleColumnWatchNextResults?: SingleColumnWatchNextResults) {
  return (
    singleColumnWatchNextResults?.results?.results?.contents
      ?.find((x) => x.itemSectionRenderer?.sectionIdentifier === 'related-items')
      ?.itemSectionRenderer?.contents?.filter((x) => x.videoWithContextRenderer)
      ?.map((x) => x.videoWithContextRenderer!) || []
  )
}
