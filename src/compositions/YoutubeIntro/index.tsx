import { useVideoConfig, Sequence, Audio } from 'remotion'

import { CONTAINER_HEIGHT as FINAL_LOGO_CONTAINER_HEIGHT } from 'elements/logo/Logo'
import { CONTAINER_HEIGHT as INTERMEDIATE_LOGO_CONTAINER_HEIGHT } from 'elements/logo/IntermediateLogo'
import { TheNerd } from './TheNerd'
import { Cool } from './Cool'
import { MouseClick, Whoosh } from 'sound'

export const YoutubeIntro = () => {
  const { height } = useVideoConfig()
  const elementsPosition = {
    theLayerTop: {
      start: -100,
      intermediate: height / 2 - INTERMEDIATE_LOGO_CONTAINER_HEIGHT / 2,
      final: height / 2 - FINAL_LOGO_CONTAINER_HEIGHT / 2,
    },
    nerdLayerBottom: {
      start: -400,
      intermediate: height / 2 - INTERMEDIATE_LOGO_CONTAINER_HEIGHT / 2,
      final: height / 2 - FINAL_LOGO_CONTAINER_HEIGHT / 2,
    },
  }

  return (
    <>
      <Sequence from={0} durationInFrames={90} name="First Stage">
        <TheNerd
          thePostion={{
            start: elementsPosition.theLayerTop.start,
            end: elementsPosition.theLayerTop.intermediate,
          }}
          nerdPosition={{
            start: elementsPosition.nerdLayerBottom.start,
            end: elementsPosition.nerdLayerBottom.intermediate,
          }}
        />
        <Audio src={Whoosh} />
      </Sequence>
      <Sequence from={90} name="Second Stage">
        <TheNerd
          thePostion={{
            start: elementsPosition.theLayerTop.intermediate,
            end: elementsPosition.theLayerTop.final,
          }}
          nerdPosition={{
            start: elementsPosition.nerdLayerBottom.intermediate,
            end: elementsPosition.nerdLayerBottom.final,
          }}
        />
      </Sequence>
      <Sequence from={90} name="Third stage">
        <Cool />
        <Audio src={MouseClick} />
      </Sequence>
    </>
  )
}
