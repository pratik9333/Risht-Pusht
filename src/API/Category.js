import btoa from "btoa";
import { backendurl, username, password } from "../backend";

export const addCategory = async (category) => {
  console.log(JSON.stringify(category));
  return fetch(`https://rishtpusht.azurewebsites.net/api/addCategory/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + btoa(`${username}:${password}`),
    },
    body: JSON.stringify(category),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return err;
    });
};

export const addSubCategory = async (category) => {
  console.log(JSON.stringify(category));
  return fetch(`https://rishtpusht.azurewebsites.net/api/addSubCategory/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + btoa(`${username}:${password}`),
    },
    body: JSON.stringify(category),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return err;
    });
};

export const deleteCategory = async (cid) => {
  return fetch(`https://rishtpusht.azurewebsites.net/api/deleteCategory/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + btoa(`${username}:${password}`),
    },
    body: JSON.stringify({ cid: cid }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteSubCategory = async (cid) => {
  console.log(JSON.stringify({ scid: cid }));
  return fetch(`https://rishtpusht.azurewebsites.net/api/deletesubcategory/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + btoa(`${username}:${password}`),
    },
    body: JSON.stringify({ scid: cid }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const editCategory = async (category) => {
  return fetch(`https://rishtpusht.azurewebsites.net/api/editCategory/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + btoa(`${username}:${password}`),
    },
    body: JSON.stringify(category),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return err;
    });
};

export const editSubCategory = async (category) => {
  console.log(JSON.stringify(category));
  return fetch(`https://rishtpusht.azurewebsites.net/api/editSubCategory/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + btoa(`${username}:${password}`),
    },
    body: JSON.stringify(category),
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

export const getAllSubCategory = async (id) => {
  return fetch(
    `https://rishtpusht.azurewebsites.net/api/products/category/${id}/`,
    {
      method: "POST",
      headers: {
        Authorization: "Basic " + btoa(`${username}:${password}`),
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return err;
    });
};

export const getImage = async (file) => {
  return fetch("https://rishtpusht.azurewebsites.net/api/addimage/", {
    method: "POST",
    headers: {
      Authorization: "Basic " + btoa(`${username}:${password}`),
    },
    body: file,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return err;
    });
};
