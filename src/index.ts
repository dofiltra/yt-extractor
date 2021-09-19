import { BrowserManager, devices, Page } from 'browser-manager'
import { getCommentsRenderer, getRelatedItems } from './helpers/extractorHelpers'
import { CommentRenderer, IYtCommentsResponse } from './types/comments'
import { TYtSearchOpts, TYtExtractorSettings, TYtVideoOpts, TYtChannelOpts, TYtVideoResult } from './types/extractor'
import { FluffyVideoWithContextRenderer, IVideoMobileResponse } from './types/video-m'

class YtExtractor {
  private _settings: TYtExtractorSettings
  private _mainUrl = `https://m.youtube.com`

  constructor(s?: TYtExtractorSettings) {
    this._settings = { ...s }
  }

  async video(opts: TYtVideoOpts) {
    const { result = { commentsResponse: {}, videoResponse: [] }, error } = await this.videoResponse(opts)

    if (error) {
      return { error }
    }

    const { playerResponse } = { ...result.videoResponse.find((tab) => tab.playerResponse) }
    const { response } = { ...result.videoResponse.find((tab) => tab.response) }
    const { onResponseReceivedEndpoints = [] } = { ...result.commentsResponse }

    const relatedItems: FluffyVideoWithContextRenderer[] = getRelatedItems(
      response?.contents?.singleColumnWatchNextResults
    )
    const comments: CommentRenderer[] = getCommentsRenderer(onResponseReceivedEndpoints)

    const resultExtract: TYtVideoResult = {
      videoDetails: playerResponse?.videoDetails,
      streamingData: playerResponse?.streamingData,
      captions: playerResponse?.captions,
      microformat: playerResponse?.microformat,

      relatedItems,
      comments
    }

    return { result: resultExtract }
  }

  async videoResponse(opts: TYtVideoOpts) {
    const { videoId } = opts

    try {
      const { pwrt, page } = await this.getPwrt(this._mainUrl)

      if (!pwrt || !page) {
        return { error: `pwrt: ${!!pwrt} | page: ${!!page}` }
      }

      const videoResponse = await this.getVideoResponse(pwrt!, page!, videoId)
      const commentsResponse = await this.getCommentsResponse(pwrt!, page!)

      await pwrt?.close()
      return { result: { videoResponse, commentsResponse } }
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

  private async getVideoResponse(pwrt: BrowserManager, page: Page, videoId: string) {
    const selector = `a[href^="/watch?v="]`
    await page?.waitForSelector(selector, {
      timeout: 10e3
    })

    const hrefElem = await page?.$(selector)
    const newHref = `/watch?v=${videoId}`
    await hrefElem?.evaluate((e, { newHref }) => e.setAttribute('href', newHref), { newHref })
    await hrefElem?.click()
    const videoResponse = (await pwrt?.getRespResult<IVideoMobileResponse[]>(page!, newHref)) as IVideoMobileResponse[]

    return videoResponse
  }

  private async getCommentsResponse(pwrt: BrowserManager, page: Page) {
    const commentsSelector = `ytm-comments-entry-point-header-renderer`
    await page?.waitForSelector(commentsSelector, {
      timeout: 10e3
    })
    const commentsElem = await page?.$(commentsSelector)
    await commentsElem?.click()
    const commentsResponse = (await pwrt?.getRespResult<IYtCommentsResponse>(
      page!,
      `youtubei/v1/next`
    )) as IYtCommentsResponse

    return commentsResponse
  }
}

export { YtExtractor }
