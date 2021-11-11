import { Composition } from 'remotion'
import { LogoAnimation } from 'compositions/LogoAnimation'

export const RemotionVideo: React.FC = () => {
  return (
    <>
      <Composition
        id="LogoAnimation"
        component={LogoAnimation}
        durationInFrames={60 * 10}
        fps={60}
        width={1920}
        height={1080}
      />
    </>
  )
}
