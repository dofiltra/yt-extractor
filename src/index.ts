import { BrowserManager, devices } from 'browser-manager'
import { TYtSearchOpts, TYtExtractorSettings, TYtVideoOpts, TYtChannelOpts } from './types/extractor'

class YtExtractor {
  private _settings: TYtExtractorSettings

  constructor(s?: TYtExtractorSettings) {
    this._settings = { ...s }
  }

  async video(opts: TYtVideoOpts) {
    const { videoId } = opts

    try {
      const url = `https://m.youtube.com/watch?v=${videoId}`
      const { pwrt, page } = await this.getPwrt(url)
    } catch (e) {
      console.log(e)
    }
  }

  async search(opts: TYtSearchOpts) {}

  async channel(opts: TYtChannelOpts) {}

  private async getPwrt(url: string) {
    const { appPath, maxOpenedBrowsers = 1 } = this._settings

    const pwrt: BrowserManager = await BrowserManager.build({
      launchOpts: {
        headless: true
      },
      device: devices['Pixel 5'],
      idleCloseSeconds: 60,
      maxOpenedBrowsers,
      appPath
    })
    const page = await pwrt.newPage({ url })

    if (!page) {
      await pwrt.close()
      return { error: 'no page' }
    }

    

    return { page, pwrt }
  }
}

export { YtExtractor }
