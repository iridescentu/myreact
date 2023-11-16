import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { login } from "./api";
import { useContext, useEffect, useState } from "react";
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

const StyledNavLink = styled(NavLink)`
  width: 100%;
  height: 100%;
  margin-top: 50px;
  text-decoration: none;
  color: red;
  background-color: black;
  border-radius: 5px;
  margin-left: 60px;
  border: 1px solid red;

  &.active {
    background-color: black;
    color: red;
  }
`;

export function Login() {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [userLogin, setUserLogin] = useState(null);
  const [loggingIn, setLoggingIn] = useState(false);
  const { loginState, setLoginState } = useContext(GameContext);
  const navigate = useNavigate();

  const { data, isLoading, refetch } = useQuery(
    "login",
    () => {
      if (userLogin) {
        return login(userLogin);
      }
    },
    { retry: 0 }
  );

  useEffect(() => {
    if (data && data.resultCode === "SUCCESS" && userLogin) {
      console.log(data);
      localStorage.setItem(
        "loginState",
        JSON.stringify({ id: userLogin.loginId })
      );
      setLoginState({ id: userLogin.loginId });
      setLoggingIn(true);
      setTimeout(() => {
        navigate("/dashboard");
        setLoggingIn(false);
      }, 1000);
    } else if (data && data.resultCode === "ERROR") {
      console.log(data);
      navigate("/login");
    }
  }, [data]);

  useEffect(() => {
    refetch();
  }, [userLogin]);

  function onSubmit(e) {
    e.preventDefault();
    const user = {
      loginId: loginId,
      password: password,
    };
    setUserLogin(user);
  }

  return (
    <>
      {loggingIn ? (
        <h1>Logging In...</h1>
      ) : loginState?.id ? (
        <h1>You already logged in with this ID. {loginState.id}</h1>
      ) : (
        <>
          <Container>
            <form onSubmit={onSubmit}>
              <Header>Login</Header>
              <div>
                <label>Login ID</label>
                <br />
                <input
                  id="loginId"
                  value={loginId}
                  onChange={(e) => setLoginId(e.target.value)}
                />
              </div>
              <div>
                <label>Password</label>
                <br />
                <input
                  id="password"
                  value={password}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit">Login</Button>
            </form>
          </Container>
          <StyledNavLink to="/register">Resgister</StyledNavLink>
        </>
      )}
    </>
  );
}
