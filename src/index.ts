import { TYtSearchOpts, TYtExtractorSettings, TYtVideoOpts, TYtChannelOpts } from './types/extractor'

class YtExtractor {
  private _settings: TYtExtractorSettings

  constructor(s?: TYtExtractorSettings) {
    this._settings = { ...s }
  }

  async search(opts: TYtSearchOpts) {}

  async video(opts: TYtVideoOpts) {}

  async channel(opts: TYtChannelOpts) {}
}

export { YtExtractor }
