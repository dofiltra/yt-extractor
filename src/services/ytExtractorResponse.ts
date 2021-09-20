import { BrowserManager, Page } from 'browser-manager'
import { extractSuggestions } from '../helpers/extractorHelpers'
import { IYtCommentsResponse } from '../types/comments'
import { TYtSearchOpts, TYtVideoOpts } from '../types/extractor'
import { IYtSearchResponse } from '../types/search-m'
import { IVideoMobileResponse } from '../types/video-m'
import { YtExtractorBase } from './ytExtractorBase'

class YtExtractorResponse extends YtExtractorBase {
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

  async searchResponse(opts: TYtSearchOpts) {
    const { query } = opts

    try {
      const { pwrt, page } = await this.getPwrt(this._mainUrl)

      if (!pwrt || !page) {
        return { error: `pwrt: ${!!pwrt} | page: ${!!page}` }
      }

      const { searchResponse, suggestions } = await this.getSearchResponse(pwrt, page, query)
      await pwrt?.close()

      return { result: { searchResponse, suggestions } }
    } catch (error) {
      return { error }
    }
  }

  private async getSearchResponse(pwrt: BrowserManager, page: Page, query: string) {
    const selectorSearchButton = `button.topbar-menu-button-avatar-button c3-icon`
    const selectorSearchInput = `.searchbox-input`

    await page.waitForSelector(selectorSearchButton, {
      timeout: 10e3
    })
    await this.applyCookie({ page })
    await page.click(selectorSearchButton)
    await page.type(selectorSearchInput, query, {
      delay: 10
    })
    const suggestionResponse = await pwrt?.getRespResult<any>(page, 'complete/search', undefined, 'text')

    await page.press(selectorSearchInput, 'Enter')
    const searchResponse = (await pwrt?.getRespResult<IYtSearchResponse>(
      page,
      `search_query=` // ${query}
    )) as IYtSearchResponse

    const suggestions = extractSuggestions(suggestionResponse)?.result

    return { suggestions, searchResponse }
  }

  private async getVideoResponse(pwrt: BrowserManager, page: Page, videoId: string) {
    const selector = `a[href^="/watch?v="]`
    await page?.waitForSelector(selector, {
      timeout: 10e3
    })

    const hrefElem = await page?.$(selector)
    const newHref = `/watch?v=${videoId}`
    await hrefElem?.evaluate((e, { href }) => e.setAttribute('href', href), { href: newHref })
    await hrefElem?.click()
    const videoResponse = (await pwrt?.getRespResult<IVideoMobileResponse[]>(page, newHref)) as IVideoMobileResponse[]

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

export { YtExtractorResponse }
