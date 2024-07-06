import { useEffect, useState } from "react";
import instance from "../services/apiClient";

interface ParentPlatforms {
  id: number;
  name: string;
  slug: string;
}

interface Response {
  results: ParentPlatforms[];
}

export const usePlatforms = () => {
  const [parentPlatforms, setParentPlatforms] = useState<ParentPlatforms[]>([]);
  useEffect(() => {
    instance
      .get<Response>("/platforms/lists/parents")
      .then((res) => {
        setParentPlatforms(res.data.results);
      })
      .catch(() => {});
  }, []);

  return parentPlatforms;
};
