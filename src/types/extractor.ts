import { Page } from 'browser-manager'
import { CommentRenderer } from './comments/comments'
import { ItemSectionRendererContent } from './search/search'
import {
  Captions,
  FluffyVideoWithContextRenderer,
  Microformat,
  PlayerResponseVideoDetails,
  StreamingData
} from './video/video'

export type TYtExtractorSettings = {
  appPath?: string
  maxOpenedBrowsers?: number
}

export type TYtSearchOpts = {
  query: string
}


export type TYtSearchResult = {
  suggestions: IYtSearchSuggesionItem[]
  search: ItemSectionRendererContent[]
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

export type TYtApplyCookieOpts = {
  page: Page
  tryIndex?: number
  tryLimit?: number
}
