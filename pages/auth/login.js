import LoginForm from "../../components/auth/LoginForm.js";
import Layout from "../../components/layout.js";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { login } from "../../data/user";

export default function Login() {
  const router = useRouter();

  const [passwordError, setPasswordError] = useState("");
  const [nonFieldError, setNonFieldError] = useState("");

  const logUser = async (event) => {
    event.preventDefault(); // don't redirect the page
    // where we'll add our form logic

    const result = await login(
      event.target.username.value,
      event.target.password.value
    );

    if (result.key) {
      console.log(result.key);
      localStorage.setItem("token", result.key);
      if (localStorage.token) {
        router.push("/dashboard");
      }
    } else {
      if (result.password) {
        setPasswordError(result.password);
      } else {
        setNonFieldError("");
      }
      if (result.non_field_errors) {
        setNonFieldError(result.non_field_errors);
      } else {
        setNonFieldError("");
      }
    }
  };

  return (
    <>
      <Layout cond="false" card="off" loginRequired={false}>
        <div className="relative flex flex-col min-w-0 break-words bg-white mb-6 shadow-lg rounded lg:w-2/5 mx-auto">
          <LoginForm
            onClick={logUser}
            passwordError={passwordError}
            nonFieldError={nonFieldError}
            registerPage="/auth/register"
          />
        </div>
      </Layout>
    </>
  );
}
