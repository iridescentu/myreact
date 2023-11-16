import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 50px);
  background-color: lightskyblue;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RegisterBox = styled.div`
  width: 500px;
  height: 500px;
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10%;
  & form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: orange;
    text-align: center;
    & input {
      width: 300px;
      height: 50px;
    }
  }
`;

const Header = styled.h2`
  background-color: aliceblue;
`;

const RegisterBtn = styled.button``;

export function Register() {
  return (
    <>
      <Container>
        <RegisterBox>
          <Header>Register</Header>
          <form>
            <label>Name</label>
            <input type="text" placeholder="Enter your name." />
            <label>Gender</label>
            <input type="text" placeholder="Enter your gender." />
            <label>Birthdate</label>
            <input type="text" placeholder="Enter your birthdate." />
            <label>Nickname</label>
            <input type="text" placeholder="Enter your nickname." />
            <label>ID</label>
            <input type="text" placeholder="Enter your ID." />
            <label>PW</label>
            <input type="text" placeholder="Enter your password." />
          </form>
          <RegisterBtn type="submit">Register</RegisterBtn>
        </RegisterBox>
      </Container>
    </>
  );
}
