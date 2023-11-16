import { purchaseGames } from "./api";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function Purchase() {
  const navigate = useNavigate();
  const location = useLocation();
  // ?의 의미는 null이 아니면 newList를 읽고, null이면 newList를 읽지 않는다는 뜻
  const purchasedGames = location.state?.newList;

  useEffect(() => {
    const delay = 1000; // 1초 딜레이 시간 (밀리초 단위)

    if (purchasedGames && purchasedGames.length > 0) {
      purchaseGames(purchasedGames);

      // 1초 후에 페이지 전환
      setTimeout(() => {
        navigate("/dashboard");
      }, delay);
    } else {
      navigate("/cart");
    }
  }, []);

  return <h1>Purchasing.....</h1>;
}
