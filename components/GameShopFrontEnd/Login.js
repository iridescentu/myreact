import { useState, useContext } from "react";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
import { GameContext } from "./GameShop";

const Container = styled.div`
  width: 300px;
  background-color: black;
  box-shadow: 2px 2px 5px red;
  padding: 20px;
  border-radius: 20px;
  margin: 50px;
  color: red;
`;

const Header = styled.div`
  font-size: 1.5rem;
  text-align: center;
`;

const Button = styled.button`
  width: 100%;
  height: 25px;
  margin-top: 20px;
  background-color: black;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  color: red;
  border: 1px solid red;
`;

export function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const { user, setUser } = useContext(GameContext);
  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    if (!username || !email) {
      // no username or no email, 이름과 이메일을 작성하지 않은 경우, 마이페이지로 보내지 않음
      return;
    }
    // 마이페이지로 보냄
    navigate("/dashboard");
    setUser({ name: username, email: email });
  }

  // function setUsername(e) {
  //   setUsername(e.target.value);
  // }
  // function setEmail(e) {
  //   setEmail(e.target.value);
  // }

  return (
    <>
      <Container>
        <form onSubmit={onSubmit}>
          <Header>Login</Header>
          <div>
            <label>user name</label>
            <br />
            <input
              id="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>user email</label>
            <br />
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button type="submit">Login</Button>
        </form>
      </Container>
    </>
  );
}
