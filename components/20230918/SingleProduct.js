import { Link, useParams } from "react-router-dom";
import games from "./db/Data";
import styled from "styled-components";

export function SingleProduct() {
  // useParams는 react-router-dom이 제공하는 후크
  // URL을 읽어서 id를 전달해 줌
  const { id } = useParams();
  // id를 통해 DB로부터 game의 정보를 가져옴
  const game = games.find((g) => g.id == id);
  const { title, genre, image, price, text } = game;

  const Container = styled.div`
    width: 600px;
    display: flex;
    flex-direction: column;
  `;

  const Img = styled.img`
    width: 100%;
  `;

  const Content = styled.p`
    font-size: 0.8rem;
  `;

  return (
    <>
      <h3>{title}</h3>
      <Container>
        <Img src={image} />
        <Content>
          <p>Title: {title}</p>
          <p>Genre: {genre}</p>
          <p>Price: {price} 원</p>
          <Link to="/products">목록으로 돌아가기</Link>
        </Content>
      </Container>
    </>
  );
}
