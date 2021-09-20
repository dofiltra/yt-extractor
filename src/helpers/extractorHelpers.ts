import { OnResponseReceivedEndpoint } from '../types/comments'
import { SingleColumnWatchNextResults } from '../types/video-m'

export function getCommentsRenderer(onResponseReceivedEndpoints?: OnResponseReceivedEndpoint[]) {
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

export function getRelatedItems(singleColumnWatchNextResults?: SingleColumnWatchNextResults) {
  const sectionId = 'related-items'
  return (
    singleColumnWatchNextResults?.results?.results?.contents
      ?.find((x) => x.itemSectionRenderer?.sectionIdentifier === sectionId)
      ?.itemSectionRenderer?.contents?.filter((x) => x.videoWithContextRenderer)
      ?.map((x) => x.videoWithContextRenderer!) || []
  )
}
