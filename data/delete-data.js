import { URL } from "./api";

export const deleteGoal = async (id) => {
  const res = await fetch(URL + "/goal/" + id + "/", {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token " + localStorage.token,
    },
    method: "DELETE",
  });
  const result = await res.json();
  return result;
};

export const deleteStep = async (id) => {
  const res = await fetch(URL + "/step/" + id + "/", {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token " + localStorage.token,
    },
    method: "DELETE",
  });
  const result = await res.json();
  return result;
};
