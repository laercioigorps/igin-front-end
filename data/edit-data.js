export const editGoal = async (id, name, description, endDate, need) => {
  const res = await fetch("http://127.0.0.1:8000/goal/" + id + "/", {
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
    method: "PUT",
  });

  const result = await res.json();
  return result;
};

export const editIteration = async (id, number, date, completed) => {
  const res = await fetch("http://127.0.0.1:8000/iteration/" + id + "/", {
    body: JSON.stringify({
      number: number,
      date: date,
      completed: completed,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token " + localStorage.token,
    },
    method: "PUT",
  });

  const result = await res.json();

  return result;
};

export const editStep = async (id, name, description, completed, goal) => {
  const res = await fetch("http://127.0.0.1:8000/step/" + id + "/", {
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
    method: "PUT",
  });

  const result = await res.json();
  return result;
};

export const editTask = async (
  id,
  name,
  description,
  iteration,
  step,
  completed
) => {
  const res = await fetch("http://127.0.0.1:8000/delivery/" + id + "/", {
    body: JSON.stringify({
      name: name,
      description: description,
      iteration: iteration,
      step: step,
      completedi: completed,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token " + localStorage.token,
    },
    method: "PUT",
  });

  const result = await res.json();
  return result;
};
