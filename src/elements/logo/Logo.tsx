import styled from '@emotion/styled'
import {
  CoolLayerSvg,
  DotSvg,
  NerdLayerSvg,
  TheLayerSvg,
} from 'elements/svgAssets'

export const CONTAINER_HEIGHT = 500

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

type LogoProps = { className?: string }

export const Logo = ({ className }: LogoProps) => (
  <Container className={className}>
    <TheLayerSvg />
    <CoolLayerSvg />
    <NerdContainer>
      <StyledNerd />
      <DotSvg />
    </NerdContainer>
  </Container>
)
