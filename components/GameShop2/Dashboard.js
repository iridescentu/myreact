import { useQuery } from "react-query";
import { getAllPurchasedGames } from "./api";
import { useContext } from "react";
import { GameContext } from "./GameShop";

export function Dashboard() {
  const { loginState } = useContext(GameContext);
  const { data, isLoading } = useQuery("getAllPurchase", getAllPurchasedGames);

  return (
    <>
      <h1>Dashboard</h1>
      <h3>{loginState?.id}'s Purchased List</h3>
      {!isLoading
        ? data.map((d, i) => (
            <p key={i}>
              Title: {d.game.title}, Quantity: {d.quantity}
            </p>
          ))
        : null}
    </>
  );
}
