import { spring, useCurrentFrame, useVideoConfig } from 'remotion'
import styled from '@emotion/styled'

import { Root } from 'elements/Root'
import { NerdLayerSvg, TheLayerSvg } from 'elements/svgAssets'

const StyledThe = styled(TheLayerSvg)`
  position: absolute;
`

const StyledNerd = styled(NerdLayerSvg)`
  position: absolute;
`

export type TheNerdProps = {
  thePostion: {
    start: number
    end: number
  }
  nerdPosition: {
    start: number
    end: number
  }
}

export const TheNerd = ({ thePostion, nerdPosition }: TheNerdProps) => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const thePositionSpring = spring({
    frame,
    from: thePostion.start,
    to: thePostion.end,
    fps,
    config: {
      mass: 0.7,
    },
  })

  const nerdPositionSpring = spring({
    frame,
    from: nerdPosition.start,
    to: nerdPosition.end,
    fps,
    config: {
      mass: 0.9,
      stiffness: 50,
    },
  })

  return (
    <Root>
      <StyledThe
        style={{
          top: thePositionSpring,
        }}
      />
      <StyledNerd
        style={{
          bottom: nerdPositionSpring,
        }}
      />
    </Root>
  )
}
