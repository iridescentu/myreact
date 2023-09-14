import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: lightslategray;
`;

const Li = styled.li`
    width: 100%;
    padding-left: 20px;
    list-style: none;
    font-size: ${(props) => props.fontSize};
    font-weight: bold;
`

const Link = styled.a`
    text-decoration: none;
    color: white;
    padding: 0 10px;
    &:hover {
        background-color: lightyellow;
        color: lightslategray;
    }
`

export function Menu({fontSize}) {
    return (
        <>
            <Container>
                {/* Line 26의 ul 옆 style = 이렇게 쓰는 것을 inline styling이라고 하는데 inline styling이 css보다 우선 순위이다 */}
                <ul style = {{display: "flex", flexWrap: "wrap"}}>
                    <Li fontSize = {fontSize}>
                        <Link href="#">Home</Link>
                    </Li>
                    <Li fontSize = {fontSize}>
                        <Link href="#">Content</Link>
                    </Li>
                    <Li fontSize = {fontSize}>
                        <Link href="#">About Us</Link>
                    </Li>
                    <Li fontSize = {fontSize}>
                        <Link href="#">Contact</Link>
                    </Li>
                    <Li fontSize = {fontSize}>
                        <Link href="#">Social</Link>
                    </Li>
                </ul>
            </Container>
        </>
    );
}