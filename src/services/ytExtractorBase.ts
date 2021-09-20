import { BrowserManager, devices } from 'browser-manager'
import { sleep } from 'time-helpers'
import { TYtApplyCookieOpts, TYtExtractorSettings } from '../types/extractor'

class YtExtractorBase {
  protected _settings: TYtExtractorSettings
  protected _mainUrl = `https://m.youtube.com`

  constructor(s?: TYtExtractorSettings) {
    this._settings = { ...s }
  }

  protected async getPwrt(url: string) {
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
    this.applyCookie({ page })

    return { page, pwrt }
  }

  protected async applyCookie(opts: TYtApplyCookieOpts): Promise<any> {
    const { page, tryIndex = 0, tryLimit = 5 } = opts

    if (tryIndex >= tryLimit) {
      return { result: false }
    }

    const isApplied = await page.evaluate(() => {
      const el: any = document.querySelectorAll(`.mandatory-consent-v2-kickin .dialog-buttons button`)[1]
      el?.click()
      return el
    })
    await sleep(1e3)

    if (!isApplied) {
      return this.applyCookie({
        ...opts,
        tryIndex: tryIndex + 1
      })
    }

    return { result: isApplied }
  }
}

export { YtExtractorBase }
