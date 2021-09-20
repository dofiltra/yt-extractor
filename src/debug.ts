import { YtExtractorHard } from '.'

const debug = async () => {
  const yt = new YtExtractorHard({
    maxOpenedBrowsers: 1
  })

  console.log(
    await yt.channel({
      // query: 'solidity'
      channelId: 'UCY0xL8V6NzzFcwzHCgB8orQ'
    })
  )
}

debug()
