import { URL } from "../services/api";

export const getVolcanoById = async (volcanoId, token) => {
  let headers = {
    accept: "application/json",
    "Content-Type": "application/json",
  };

  if (token) {
    headers = {
      ...headers,
      Authorization: `Bearer ${token}`,
    };
  }

  return fetch(`${URL}/volcano/${volcanoId}`, { method: "GET", headers }).then(
    (response) => response.json()
  );
};

export const getVolcanoes = async (country, populatedWithin) => {
  let url = `${URL}/volcanoes?country=${country}`;

  if (populatedWithin) {
    url = `${url}&populatedWithin=${populatedWithin}`;
  }

  return fetch(url).then((response) => response.json());
};
