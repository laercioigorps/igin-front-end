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
    return result
  };