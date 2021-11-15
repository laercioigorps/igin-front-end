import { URL } from "./api";

export const registerStep = async (name, description, completed, goal) => {
  const res = await fetch(URL + "/step/", {
    body: JSON.stringify({
      name: name,
      description: description,
      completed: completed,
      goal: goal,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token " + localStorage.token,
    },
    method: "POST",
  });

  const resp = await res.json();
  return resp;
};

export const registerGoal = async (name, description, endDate, need) => {
  const res = await fetch(URL + "/goal/", {
    body: JSON.stringify({
      name: name,
      description: description,
      endDate: endDate,
      need: need,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token " + localStorage.token,
    },
    method: "POST",
  });

  const result = await res.json();

  return result;
};

export const registerIteration = async (number, date, completed) => {
  const res = await fetch(URL + "/iteration/", {
    body: JSON.stringify({
      number: number,
      date: date,
      completed: completed,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token " + localStorage.token,
    },
    method: "POST",
  });

  const result = await res.json();
  return result;
};

export const registerTask = async (name, description, completed, step) => {
  const res = await fetch(URL + "/delivery/", {
    body: JSON.stringify({
      name: name,
      description: description,
      completed: completed,
      step: step,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token " + localStorage.token,
    },
    method: "POST",
  });

  const result = await res.json();
  return result;
};

export const wizardSet = async () => {
  const res = await fetch(URL + "/wizard/", {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token " + localStorage.token,
    },
    method: "POST",
  });

  const result = await res.json();
  return result;
};
