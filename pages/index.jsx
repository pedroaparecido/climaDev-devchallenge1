import styled from "styled-components"

import BackgroundImageWithChildren from "../src/components/layout/backgroundImageWithChildren/BackgroundImageWithChildren"
import Logo from "../src/components/logo/Logo"
import InputWithSuggestions from "../src/components/form/inputWithSuggestions/InputWithSuggestions"

const StyledDiv = styled.div`
  background-color: ${props => props.theme.colors.white};
  min-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px;

  @media (max-width: 500px) {
    min-width: 100%;
  }
`

const StyledInput = styled(InputWithSuggestions)`
  width: 100%;
  box-sizing: border-box;
`

const InputContainer = styled.div`
  
  @media (min-width: 750px) {
    width: 150%;
  }
  
  z-index: 1;
`

export default function HomePage () {
  return (
    <BackgroundImageWithChildren>
      <StyledDiv>
        <Logo showImage type='vertical' />
        <InputContainer>
          <StyledInput placeholder="Digite o nome da cidade" />
        </InputContainer>
      </StyledDiv>
    </BackgroundImageWithChildren>
  )
}