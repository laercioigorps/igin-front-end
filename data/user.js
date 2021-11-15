export const login = async (login, password) => {
  const res = await fetch("http://127.0.0.1:8000/rest-auth/login/", {
    body: JSON.stringify({
      username: login,
      password: password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  const result = await res.json();
  return result;
};

export const RegisterUser = async (username, email, password1, password2) => {
  const res = await fetch("http://127.0.0.1:8000/rest-auth/registration/", {
    body: JSON.stringify({
      username: username,
      email: email,
      password1: password1,
      password2: password2,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  const result = await res.json();
  return result;
};
