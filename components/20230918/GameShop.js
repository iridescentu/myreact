import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Home } from "./Home";
import { Products } from "./Products";
import { Dashboard } from "./Dashboard";
import { Login } from "./Login";
import { Other } from "./Other";
import { Error } from "./Error";
import { SingleProduct } from "./SingleProduct";
import { ProductWrapper } from "./ProductWrapper";
import { createContext, useState } from "react";
import games from "./db/Data";
import { ProtectedRoute } from "./ProtectedRoute";

export const GameContext = createContext();
const defaultCheckList = games.map((g) => {
  return { id: g.id, checked: false };
});

export function GameShop() {
  const [checkList, setCheckList] = useState(defaultCheckList);
  return (
    <>
      <GameContext.Provider value={{ checkList, setCheckList }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NavBar />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              {/* Single Product 페이지를 띄우기 위해 products 페이지를 ProductWrapper로 감싸 줌 */}
              {/* 이처럼 wrapper로 감싸 줬을 때 주소창에 products/asdfj처럼 product/ 뒤에 아무 글자나 썼을 때
                페이지에 single product만 뜰 수 있게 해 줌.
                이전에는 Games List 아래에 single product가 떴었음 */}
              <Route path="products" element={<ProductWrapper />}>
                <Route index element={<Products />} />
                <Route path=":id" element={<SingleProduct />} />
              </Route>
              <Route
                path="dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              ></Route>
              <Route path="login" element={<Login />} />
              <Route path="cart" element={<Other />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GameContext.Provider>
    </>
  );
}
