import styled from "styled-components";
import { useState } from "react";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { Contact } from "./Contact";
import { About } from "./About";
import { Error } from "./Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Container = styled.div`
    width: 80%;
    height: 100vh;
    display: grid;
    grid-template-columns: 30% 70%;
    margin: 0 auto;
`

const Content = styled.div`

`;

export function MyRouter() {
    const [page, setPage] = useState(Home);
    return (
        <>
            <BrowserRouter>
                <Container>
                    <Navbar setPage = {setPage} />
                    <Content>
                        <Routes>
                            {/* path는 주소창의 URL을 말함 */}
                            <Route path="/" element={<Home />}></Route>
                            <Route path="/contact" element={<Contact />}></Route>
                            <Route path="/about" element={<About />}></Route>
                            <Route path="*" element={<Error />}></Route>
                        </Routes>
                    </Content>
                </Container>
            </BrowserRouter>
        </>
    );
}