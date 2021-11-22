import RegisterForm from "../../components/auth/RegisterForm.js";
import Layout from "../../components/layout.js";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { RegisterUser } from "../../data/user.js";
import { wizardSet } from "../../data/create-data.js";

export default function Register() {
  const router = useRouter();
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password1Error, setPassword1Error] = useState("");
  const [password2Error, setPassword2Error] = useState("");
  const [nonFieldError, setNonFieldError] = useState("");

  const RegUser = async (event) => {
    event.preventDefault(); // don't redirect the page
    // where we'll add our form logic

    const result = await RegisterUser(
      event.target.username.value,
      event.target.email.value,
      event.target.password1.value,
      event.target.password2.value
    );

    if (result.key) {
      console.log(result.key);
      localStorage.setItem("token", result.key);
      if (localStorage.token) {
        const res = wizardSet();
        router.push("/dashboard");
      }
    } else {
      console.log(result);
      if (result.username) {
        setUsernameError(result.username);
      } else {
        setUsernameError("");
      }
      if (result.email) {
        setEmailError(result.email);
      } else {
        setEmailError("");
      }
      if (result.password1) {
        setPassword1Error(result.password1);
      } else {
        setPassword1Error("");
      }
      if (result.password2) {
        setPassword2Error(result.password2);
      } else {
        setPassword2Error("");
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
          <RegisterForm
            loginURL="/auth/login"
            onClick={RegUser}
            usernameError={usernameError}
            emailError={emailError}
            password1Error={password1Error}
            password2Error={password2Error}
            nonFieldError={nonFieldError}
          />
        </div>
      </Layout>
    </>
  );
}
