import styled from '@emotion/styled'
import {
  CoolLayerSvg,
  DotSvg,
  NerdLayerSvg,
  TheLayerSvg,
} from 'elements/svgAssets'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const NerdContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
`

const StyledThe = styled(TheLayerSvg)`
  margin-bottom: 50px;
`

const StyledCool = styled(CoolLayerSvg)`
  margin-bottom: 50px;
`
const StyledNerd = styled(NerdLayerSvg)`
  margin-right: 20px;
`

export const Logo = () => (
  <Container>
    <StyledThe />
    <StyledCool />
    <NerdContainer>
      <StyledNerd />
      <DotSvg />
    </NerdContainer>
  </Container>
)
