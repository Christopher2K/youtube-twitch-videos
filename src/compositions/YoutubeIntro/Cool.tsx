import { spring, useCurrentFrame, useVideoConfig } from 'remotion'
import styled from '@emotion/styled'

import { Root } from 'elements/Root'
import { CoolLayerSvg } from 'elements/svgAssets'

const StyledCool = styled(CoolLayerSvg)`
  position: absolute;
  top: 50%;
  /* transform-origin: center; */
`

export type CoolProps = {}

export const Cool = ({}: CoolProps) => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const transformSpring = spring({
    frame,
    from: 0,
    to: 1,
    fps,
    config: {
      mass: 1,
    },
  })

  return (
    <Root>
      <StyledCool
        style={{
          transform: `translateY(calc(-50% - 50px)) scale(${transformSpring})`,
        }}
      />
    </Root>
  )
}
