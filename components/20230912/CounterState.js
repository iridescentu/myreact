import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 500px;
    text-align: center;
    margin: 0 auto;
    h1 {
        font-size: 4rem;
    }
    button {
        width: 100px;
        font-size: 2rem;
        margin: 10px;
    }
`;

export function CounterState() {
    const [count, setCount] = useState(0);
    // let count = 0;
    function minus() {
        // count = count - 1;
        setCount (count - 1);
        console.log("minus", count);
    };
    function plus() {
        // count = count + 1;
        setCount (count + 1);
        console.log("plus", count);
    };

    return (
        <>
            <Container>
                <h1>{count}</h1>
                <button onClick={minus}>-</button>
                <button onClick={plus}>+</button>
            </Container>
        </>
    );
}