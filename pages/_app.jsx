import { createGlobalStyle, ThemeProvider } from "styled-components"
import theme from '../src/theme'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    
    body {
        background-color: ${props => props.theme.colors.white};
    }
`

function App({ Component, pageProps}) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default App