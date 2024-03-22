import { useEffect, useState } from "react";
import { getCountries } from "../services/countries";

export const useCountries = () => {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCountries()
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return { loading, countries, error };
};
