import styled from "styled-components"

const StyleButton = styled.button`
    width: 100px;
    height: 50px;
    padding: 10px 20px;
    font-size: 1.3rem;
    // 글씨 상하 위치를 조정할 때는 line-height를 사용하고 좌우 위치를 조정할 때는 text-align 사용
    line-height: 8px;
    color: ${(props) => props.color};
    background-color: ${(props) => props.bgcolor};
    border-radius: 10px;
    
`;

export function Button({color, bgcolor, title}) {
    return <>
        <StyleButton color={color} bgcolor={bgcolor}>
            {title}
        </StyleButton>
    </>
}