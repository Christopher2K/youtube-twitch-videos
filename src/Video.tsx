import { Composition } from 'remotion'
import { LogoAnimation } from 'compositions/LogoAnimation'

export const RemotionVideo: React.FC = () => {
  return (
    <>
      <Composition
        id="LogoAnimation"
        component={LogoAnimation}
        durationInFrames={60}
        fps={30}
        width={1280}
        height={720}
      />
    </>
  )
}
