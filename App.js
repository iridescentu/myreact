import { Tab } from "./components/20230911/Tab";
import { Session1 } from "./components/20230911/Session1";
import { List } from "./components/20230911/List";
import { Avatar } from "./components/20230912/Avatar";
import { AvatarList } from "./components/20230912/AvatarList";
import { PropsTest } from "./components/20230912/PropsTest";
import { CounterState } from "./components/20230912/CounterState";
// import { Menu } from "./components/20230913/Menu"
import { Home } from "./components/20230913/Home";
import { createGlobalStyle } from "styled-components";
import { Button } from "./components/20230913/Button";
import { Gallery } from "./components/20230914/Gallery";
import { OpenWeather } from "./components/20230914/OpenWeather";
import { MyRef } from "./components/20230915/MyRef";
import { MyRouter } from "./components/20230915/MyRouter";
// import { GameShop } from "./components/20230918/GameShop";
import { UseContext } from "./components/20230919/UseContext";
// import { GameShop } from "./components/GameShopFrontEnd/GameShop";
import { QueryClient, QueryClientProvider } from "react-query";
import { GameShop } from "./components/GameShop2/GameShop";

// 230912 Avatar
// export default function App() {
//   return (
//     <>
//       <Avatar
//         bgcolor = "lightgreen"
//         person = {{name: "Steve", job: "Programmer", country: "대한민국"}}
//         // Line 11의 person = {{}} => 바깥 {}는 변수, 안쪽{}는 객체
//       />
//       <Avatar
//         bgcolor = "lightyellow"
//         person = {{name: "다혜", job: "Future Programmer", country: "대한민국"}}
//         // Line 11의 person = {{}} => 바깥 {}는 변수, 안쪽{}는 객체
//       />
//       <Avatar
//         bgcolor = "lightblue"
//         person = {{name: "채영", job: "Future Programmer", country: "대한민국"}}
//         // Line 11의 person = {{}} => 바깥 {}는 변수, 안쪽{}는 객체
//       />
//       <Avatar
//         bgcolor = "lightpink"
//         person = {{name: "혜정", job: "Future Programmer", country: "대한민국"}}
//         // Line 11의 person = {{}} => 바깥 {}는 변수, 안쪽{}는 객체
//       />
//     </>
//   );
// }

// 230912 AvatarList
// export default function App() {
//   return (
//     <>
//       <AvatarList />
//     </>
//   )
// }

// 230912 PropsTest
// export default function App() {
//   return (
//     <>
//         <PropsTest firstName="철수" score = {{math: "80", english: "90", history: "100"}} />
//     </>
//   )
// }

// 230912 CounterState
// export default function App() {
//   return (
//     <>
//       <CounterState />
//     </>
//   );
// }

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

// export default function App() {
//   return (
//     <>
//       {/* <Menu /> */}
//       <GlobalStyle />
//       <Home />
//     </>
//   )
// }

// 230914 Gallery
// export default function App() {
//   return (
//     <>
//       <Gallery />
//     </>
//   )
// }

// 230914 OpenWeather
// export default function App() {
//   return (
//     <>
//       <GlobalStyle />
//       <OpenWeather cityName = "richardson" />
//     </>
//   )
// }

// 230915 MyRef
// export default function App() {
//   return (
//     <>
//       <GlobalStyle />
//       <MyRef />
//     </>
//   )
// }

// 230915 MyRouter
// export default function App() {
//   return (
//     <>
//       <GlobalStyle />
//       <MyRouter />
//     </>
//   )
// }

//230918 GameShopt
export default function App() {
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={client}>
        <GameShop />
      </QueryClientProvider>
    </>
  );
}

// 230919 UseContext
// export default function App() {
//   return (
//     <>
//       <GlobalStyle />
//       <UseContext />
//     </>
//   );
// }
