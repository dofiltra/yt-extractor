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

export type TYtVideoOpts = {
  videoId: string
}
export type TYtVideoResult = {
  videoDetails?: PlayerResponseVideoDetails
  streamingData?: StreamingData
  microformat?: Microformat
  captions?: Captions

  relatedItems?: FluffyVideoWithContextRenderer[]
}

export type TYtChannelOpts = {
  channelId: string
}
