import { GameShop } from "./components/GameShop2/GameShop";
import { QueryClient, QueryClientProvider } from "react-query";
import { createGlobalStyle } from "styled-components";

const client = new QueryClient();

// 230913 Menu, Home, Button, ItemList
const GlobalStyle = createGlobalStyle`
  // 한글 폰트 적용을 위해서는 "눈누" 사이트에 들어가서 '웹폰트로 사용'에 있는 코드를 복사한 후
  // Line 72처럼 GlobalStyle에 붙여넣은 뒤 Line 83의 font-family에 한글 폰트 font-family 이름을 넣어 주면 됨
  @font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    // font 적용은 google font에서 폰트 <link>를 복사한 후 index.html에 넣어 주면 된다
    font-family: Poppins, GmarketSansMedium;

  }
`;

export default function AppGameShop() {
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={client}>
        <GameShop />
      </QueryClientProvider>
    </>
  );
}
