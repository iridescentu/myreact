import { useState } from "react";

export function ItemList() {
    // 추가한 물품들을 물품 목록에 표시하려면 setter가 필요
    // [a, b] b에는 대부분 상수값 앞에 set을 붙여 줌
    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState([]);

    // 리액트의 onChange 이벤트는 바닐라(자바)스크립트에서의 keydown 이벤트처럼
    // 입력할 때마다 발생함 (설계 방식이 다름)
    function onChange(e) {
        setNewItem(e.target.value);
    }

    function addItem() {
        const temp = [...items, newItem];
        setItems(temp);
        setNewItem(""); // input 입력창을 clear시킴
        console.log(items);
    }


    return (
        <>
            <input
            placeholder = "물품 이름을 입력하세요"
            onChange = {onChange}
            value = {newItem}
            />
            <button onClick = {addItem}>물품 추가</button>
            <h3>물품 목록</h3>
            <ul>
                {
                    items.map((item, index) => (<li key={index}>{item}</li>))
                }
            </ul>
        </>
    );
}