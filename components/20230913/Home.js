import styled from "styled-components";
import { Menu } from "./Menu";
import { Button } from "./Button";
import { ItemList } from "./ItemList";

const Container = styled.div`
    width: 200px;
    height: 100vh;
    margin: 0 auto;
    position: absolute;
    top: 0;
    left: 0;
`;

const Content = styled.div`
    position: absolute;
    top: 0;
    /* Line 6에서 width 200px을 줬기 때문에 아래의 Line 18, 19에서도 200px을 줘야 함 */
    left: 200px;
    width: ${() => window.innerWidth - 200}px;
`

// 아래처럼 상수의 이름이 모두 대문자인 경우 진짜 "상수"라는 뜻
const XLARGE = "3rem";
const LARGE = "2rem";
const MEDIUM = "1.5rem";
const SMALL = "1rem";
const XSMALL = "0.7rem";

export function Home() {
    return (
        <>
            <Container>
                <Menu fontSize = {MEDIUM} />
                {/* <h1>한글 폰트 적용</h1> */}
            </Container>
            <Content>
                <div>
                    <Button color="white" bgcolor="lightskyblue" title="버튼1"/>
                    <Button color="lightslategray" bgcolor="lightyellow" title="버튼2"/>
                    <Button color="teal" bgcolor="lightgreen" title="버튼3"/>
                </div>
                <div>
                    <br />
                    <br />
                    <br />
                    <ItemList />
                </div>
            </Content>
        </>
    );
}