import { URL } from "../services/api";

export const getCountries = async () => {
  return fetch(`${URL}/countries`).then((response) => response.json());
};
