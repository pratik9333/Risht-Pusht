import btoa from "btoa";
import { backendurl, username, password } from "../backend";

export const getOrders = async () => {
  return fetch(`https://rishtpusht.azurewebsites.net/api/allorders/`, {
    method: "POST",
    headers: {
      Authorization: "Basic " + btoa(`${username}:${password}`),
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return err;
    });
};
