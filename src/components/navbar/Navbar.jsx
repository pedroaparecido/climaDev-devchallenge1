import styled from "styled-components"
import { useRouter } from "next/router"

import Logo from '../logo/Logo'
import Container from "../layout/container/Container"

const StyledNavbar = styled.div`
    height: 105px;
    display: flex;
    align-items: center;
`

const StyledLogo = styled.div`
    cursor: pointer;
`

export default function Navbar() {
    const router = useRouter()
    return(
        <StyledNavbar>
            <Container>
                <StyledLogo onClick={() => router.push('/')} >
                    <Logo />
                </StyledLogo>
            </Container>
        </StyledNavbar>
    )
}