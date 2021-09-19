import { BrowserManager, devices, Page } from 'browser-manager'
import { TYtSearchOpts, TYtExtractorSettings, TYtVideoOpts, TYtChannelOpts } from './types/extractor'
import { IVideoMobileResponse } from './types/video-m'

class YtExtractor {
  private _settings: TYtExtractorSettings
  private _mainUrl = `https://m.youtube.com`

  constructor(s?: TYtExtractorSettings) {
    this._settings = { ...s }
  }

  async video(opts: TYtVideoOpts) {
    const { videoId } = opts

    try {
      const selector = `a[href^="/watch?v="]`
      const { pwrt, page } = await this.getPwrt(this._mainUrl)

      await page?.waitForSelector(selector, {
        timeout: 10e3
      })

      const hrefElem = await page?.$(selector)
      const newHref = `/watch?v=${videoId}`
      await hrefElem?.evaluate((e, { newHref }) => e.setAttribute('href', newHref), { newHref })
      await hrefElem?.click()

      const result = await pwrt?.getRespResult<IVideoMobileResponse>(page!, newHref)
      await pwrt?.close()

      return { result }
    } catch (error) {
      return { error }
    }
  }

  async search(opts: TYtSearchOpts) {}

  async channel(opts: TYtChannelOpts) {}

  private async getPwrt(url: string) {
    const { appPath, maxOpenedBrowsers = 1 } = this._settings

    const pwrt: BrowserManager = await BrowserManager.build({
      launchOpts: {
        headless: false
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
