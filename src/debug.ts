import { YtExtractor } from '.'

const debug = async () => {
  const yt = new YtExtractor({
    maxOpenedBrowsers: 1
  })

  console.log(
    await yt.search({
      query: 'solidity'
    })
  )
}

debug()
