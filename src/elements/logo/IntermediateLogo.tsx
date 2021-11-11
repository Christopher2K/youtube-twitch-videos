import styled from '@emotion/styled'
import { DotSvg, NerdLayerSvg, TheLayerSvg } from 'elements/svgAssets'

export const CONTAINER_HEIGHT = 250

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: ${CONTAINER_HEIGHT}px;
  width: 960px;
`

const NerdContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
`

const StyledNerd = styled(NerdLayerSvg)`
  margin-right: 20px;
`

type IntermediateLogoProps = { className?: string }

export const IntermediateLogo = ({ className }: IntermediateLogoProps) => (
  <Container className={className}>
    <TheLayerSvg />
    <NerdContainer>
      <StyledNerd />
      <DotSvg />
    </NerdContainer>
  </Container>
)
