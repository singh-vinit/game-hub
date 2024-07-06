import { platform } from "../hooks/useGames";
import PlatformList from "./PlatformList";
interface gameObj {
  name: string;
  background_image: string;
  parent_platforms: { platform: platform }[];
  rating: number;
}

interface Props {
  game: gameObj;
}

const Card = ({ game }: Props) => {
  return (
    <div className="max-w-72 shadow-md rounded-xl">
      <img
        src={game.background_image}
        className="rounded-t-xl"
        loading="lazy"
        style={{ width: "100%", height: "178px" }}
      />
      <div className="p-4">
        <PlatformList list={game.parent_platforms} />
        <div className="text-xl font-bold mb-2">{game.name}</div>
        <div className="bg-black text-white font-medium rounded-md p-1 w-fit">
          {game.rating}
        </div>
      </div>
    </div>
  );
};

export default Card;
