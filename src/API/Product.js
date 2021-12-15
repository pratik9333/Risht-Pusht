import btoa from "btoa";
import { backendurl, username, password } from "../backend";

export const addProduct = async (product) => {
  return fetch(`https://rishtpusht.azurewebsites.net/api/addProduct/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + btoa(`${username}:${password}`),
    },
    body: JSON.stringify(product),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return err;
    });
};

export const getAllCategory = async () => {
  return fetch(`https://rishtpusht.azurewebsites.net/api/getCategories`, {
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

export const deleteProduct = async (pid) => {
  return fetch(`https://rishtpusht.azurewebsites.net/api/deleteProduct/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + btoa(`${username}:${password}`),
    },
    body: JSON.stringify({ pid: pid }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllProducts = async () => {
  return fetch(`https://rishtpusht.azurewebsites.net/api/products`, {
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

export const editProduct = async (product) => {
  return fetch(`https://rishtpusht.azurewebsites.net/api/editProduct/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + btoa(`${username}:${password}`),
    },
    body: JSON.stringify(product),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return err;
    });
};
