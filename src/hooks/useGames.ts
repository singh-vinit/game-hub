import instance from "../services/apiClient";
import { useEffect, useState } from "react";

interface game {
  id: number;
  name: string;
  background_image: string;
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

  return { games, loading, error };
};
