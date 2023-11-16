import styled from "styled-components";
import { NavLink, Link, Outlet } from "react-router-dom";
import { NavItem } from "./NavItem";

const Container = styled.div`
  display: flex;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: red;
  padding: 5px;
  background-color: black;

  &.active {
    background-color: #ff2800;
    color: black;
  }
`;

export function NavBar() {
  return (
    <>
      <Container>
        <StyledNavLink to="/home">
          <NavItem icon="ti ti-home-2" name="HOME" />
        </StyledNavLink>
        <StyledNavLink to="/products">
          <NavItem icon="ti ti-building-store" name="SHOP" />
        </StyledNavLink>
        <StyledNavLink to="/dashboard">
          <NavItem icon="ti ti-user" name="MyPage" />
        </StyledNavLink>
        <StyledNavLink to="/login">
          <NavItem icon="ti ti-login" name="Login" />
        </StyledNavLink>
        <StyledNavLink to="/cart">
          <NavItem icon="ti ti-shopping-cart" name="Cart" />
        </StyledNavLink>
      </Container>
      <Outlet />
    </>
  );
}
