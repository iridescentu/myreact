import { createGlobalStyle } from "styled-components";
import { OurWorkSpace } from "./components/OurWorkSpace/OurWorkSpace";

const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  /* @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
font-family: 'Black Ops One','Noto Serif KR'; */
}
html,body{
  width: 100%;
  height: 100%;
}

`;

export default function AppOWS() {
  return (
    <>
      <GlobalStyle />
      <OurWorkSpace />
    </>
  );
}
