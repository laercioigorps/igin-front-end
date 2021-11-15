export const registerStep = async (name, description, completed, goal) => {
  const res = await fetch("http://127.0.0.1:8000/step/", {
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
  const res = await fetch("http://127.0.0.1:8000/goal/", {
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
