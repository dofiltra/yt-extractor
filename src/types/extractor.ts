import { CommentRenderer } from './comments'
import {
  Captions,
  FluffyVideoWithContextRenderer,
  Microformat,
  PlayerResponseVideoDetails,
  StreamingData
} from './video-m'

export type TYtExtractorSettings = {
  appPath?: string
  maxOpenedBrowsers?: number
}

export type TYtSearchOpts = {
  query: string
}

export type TYtSearchResult = {
  suggestions: IYtSearchSuggesionItem[]
}

export type IYtSearchSuggesionItem = {
  keyword: string
  freq?: number
  sizes?: number[]
}

export type TYtVideoOpts = {
  videoId: string
}
export type TYtVideoResult = {
  videoDetails?: PlayerResponseVideoDetails
  streamingData?: StreamingData
  microformat?: Microformat
  captions?: Captions

  relatedItems?: FluffyVideoWithContextRenderer[]
  comments?: CommentRenderer[]
}

export type TYtChannelOpts = {
  channelId: string
}
