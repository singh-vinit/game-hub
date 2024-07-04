import { useEffect, useState } from "react";
import instance from "../services/apiClient";

interface genre {
  id: number;
  name: string;
  image_background: string;
}

interface response {
  results: genre[];
}

export function useGenres() {
  const [genres, setGenres] = useState<genre[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    instance
      .get<response>("https://api.rawg.io/api/genres")
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);
  return { genres, loading };
}
