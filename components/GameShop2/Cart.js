import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { GameContext } from "./GameShop";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  position: relative;
`;
const Card = styled.div`
  width: 400px;
  height: 100px;
  display: flex;
  border: 1px solid black;
  margin: 10px 0;
  position: relative;
`;
const Img = styled.img`
  height: calc(100% - 2);
  margin: 1px;
`;
const Text = styled.p`
  margin-left: 10px;
  font-size: 0.5rem;
`;
const DeleteBtn = styled.button`
  width: 30px;
  height: 100%;
  background-color: red;
  color: black;
  position: absolute;
  right: 0;
  text-align: center;
  line-height: 100px;
  border: none;
  cursor: pointer;
`;

const PayBtn = styled.button`
  width: 80px;
  height: 30px;
  background-color: black;
  color: black;
  border-radius: 5px;
  /* position: absolute; */
  /* line-height: 100px; */
  color: red;
  font-weight: bold;
  border: 1px solid red;
  cursor: pointer;
`;

export function Cart() {
  const { checkList, setCheckList, games } = useContext(GameContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [newList, setNewList] = useState([]);
  const navigate = useNavigate();

  function onClick(e) {
    const temp = checkList.map((item) => {
      if (item.id === +e.target.id) {
        return { ...item, checked: false };
      } else {
        return item;
      }
    });
    setCheckList(temp);
  }

  function onClickBtn() {
    const temp = checkList.map((item) => {
      return { ...item, checked: false };
    });
    setCheckList(temp);
    // useNavigate 후크의 기능
    navigate("/purchase", { state: { newList } });
  }

  useEffect(() => {
    setNewList(games.filter((g, i) => checkList[i].checked));
  }, [checkList, games]);

  useEffect(() => {
    let price = 0;
    for (let i = 0; i < newList.length; i++) {
      price = price + newList[i].price;
    }
    setTotalPrice(price);
  }, [newList]);

  return (
    <>
      <Container>
        {newList.map((game) => (
          <Card key={game.id}>
            <Img src={game.image} />
            <div>
              <Text>Title: {game.title}</Text>
              <Text>Genre: {game.genre}</Text>
              <Text>Price: {game.price} won</Text>
            </div>
            <DeleteBtn id={game.id} onClick={onClick}>
              X
            </DeleteBtn>
          </Card>
        ))}
      </Container>
      <h3>Total Price: {totalPrice} won</h3>
      <PayBtn onClick={onClickBtn}>Purchase</PayBtn>
    </>
  );
}
