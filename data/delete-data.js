export const deleteGoal = async (id) => {
  const res = await fetch("http://127.0.0.1:8000/goal/" + id + "/", {
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
  const res = await fetch("http://127.0.0.1:8000/step/" + id + "/", {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token " + localStorage.token,
    },
    method: "DELETE",
  });
  const result = await res.json();
  return result;
};
