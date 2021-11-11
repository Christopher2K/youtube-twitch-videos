import { Composition } from 'remotion'
import { YoutubeIntro } from 'compositions/YoutubeIntro'

export const RemotionVideo: React.FC = () => {
  return (
    <>
      <Composition
        id="YoutubeIntro"
        component={YoutubeIntro}
        durationInFrames={60 * 4}
        fps={60}
        width={1920}
        height={1080}
      />
    </>
  )
}
