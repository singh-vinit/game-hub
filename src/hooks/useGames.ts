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

export const useGames = (genre: string, platform: string) => {
  const [games, setGames] = useState<game[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    instance
      .get<response>("/games", {
        params: {
          genres: genre || null,
          platforms: Number(platform) || null,
        },
      })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });

    return () => {
      setLoading(true);
    };
  }, [genre, platform]);

  return { games, loading, error };
};
