import instance from "../services/apiClient";
import { useEffect, useState } from "react";

export interface platform {
  id: number;
  slug: string;
}

interface genre {
  id: number;
  name: string;
}
interface game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: platform }[];
  rating: number;
  genres: genre[];
}
interface response {
  count: number;
  results: game[];
}

export const useGames = () => {
  const [games, setGames] = useState<game[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    instance
      .get<response>("/games")
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  console.log(games);

  return { games, loading, error };
};
