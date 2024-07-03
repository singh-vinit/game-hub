import { useGames } from "../hooks/useGames";
import Card from "./Card";
import CardSkeleton from "./CardSkeleton";

const Main = () => {
  const { games, loading } = useGames();
  return (
    <div className="px-2 py-4 h-screen col-span-4">
      <div className="text-4xl font-bold capitalize mb-1">new and trending</div>
      <div className="text-md font-medium mb-6">
        based on player counts and release date
      </div>
      {loading ? (
        <div className="grid grid-cols-3 gap-y-8">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-y-8">
          {games.map((game) => (
            <Card key={game.id} game={game} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Main;
