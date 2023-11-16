import { useQuery } from "react-query";
import { getAllPurchasedGames } from "./api";

export function Dashboard() {
  const { data: purchasedGames, isLoading } = useQuery(
    "dashborad",
    getAllPurchasedGames
  );
  return (
    <>
      <h1>Dashboard</h1>
      {!isLoading &&
        purchasedGames.map((game, index) => (
          <p key={index}>
            Title: {game.game.title}, Quantity: {game.quantity}
          </p>
        ))}
    </>
  );
}
