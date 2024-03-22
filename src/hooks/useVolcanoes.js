import { useEffect, useState } from "react";
import { getVolcanoes } from "../services/volcanoes";

export const useVolcanoes = (country, populatedWithin) => {
  const [loading, setLoading] = useState(true);
  const [volcanoes, setVolcanoes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getVolcanoes(country, populatedWithin)
      .then((data) => {
        setVolcanoes(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, [country, populatedWithin]);

  return { loading, volcanoes: volcanoes, error };
};
