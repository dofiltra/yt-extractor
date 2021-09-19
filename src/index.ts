import { TYtExtractorSettings } from './types/extractor'

class YtExtractor {
  private _settings: TYtExtractorSettings

  constructor(s?: TYtExtractorSettings) {
    this._settings = { ...s }
  }

  async extractByQuery(query: string) {}

  async extractByUrls() {}
}

export { YtExtractor }
