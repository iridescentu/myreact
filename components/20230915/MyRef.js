import { useState, useEffect, useRef } from "react"

export function MyRef() {
    console.log("렌더링")
    const [inputValue, setInputValue] = useState("");
    // count처럼 숫자를 세기 위해 기존 값을 저장해야 하지만 렌더링이 필요 없는 경우에는 useRef 후크를 사용해야 함
    // Line 7 코드처럼 count를 useState로 만들면 횟수를 세는 동안 계속 렌더링을 발생시키는 문제가 있음
    // const [count, setCount] = useState(0);
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
    }, [inputValue])

    function setValue(e) {
        setInputValue(e.target.value);
    }

    return(
        <>
            <input value = {inputValue} onChange = {setValue} />
            <p>
                렌더링 횟수: <span>{count.current}</span>
            </p>
        </>
    );
}