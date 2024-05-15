import Document, { Html, Head, Main, NextScript } from "next/document"

class NewDocument extends Document {
    render() {
        return(
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
                </Head>
                <Main>
                    <NextScript />
                </Main>
            </Html>
        )
    }
}

export default NewDocument