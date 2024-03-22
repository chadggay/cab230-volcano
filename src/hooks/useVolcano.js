import { useEffect, useState } from "react";
import { getVolcanoById } from "../services/volcanoes";
import { useAuth } from "./useAuth";

export const useVolcano = (volcanoId) => {
  const [loading, setLoading] = useState(true);
  const [volcano, setVolcano] = useState([]);
  const [error, setError] = useState(null);

  const { getAccessToken } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const token = await getAccessToken();

        const data = await getVolcanoById(volcanoId, token);
        setVolcano(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [volcanoId, getAccessToken]);

  return { loading, volcano, error };
};
