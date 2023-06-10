//ssr이라 처음에는 스타일이 아무것도 안된 html만 보이니까 미리 초기 스타일을 지정해주는 파일!
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
