import Document,{Html,Head,Main,NextScript} from "next/document";

// O _document ou CustomDocument é reponsavel por carregar uma unica vez
// na nossa aplicação estilos,componentes e imagens que serão reaproveitadas.
export default class MyDocument extends Document{
    render(): JSX.Element {
        return(
            <Html>
                <Head>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}