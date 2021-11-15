import RegisterForm from "../../components/forms/RegisterGoalForm.js";
import Layout from "../../components/layout.js";
import { useRouter } from "next/router";
import React from "react";
import useNeeds from "../../data/use-data";
import { registerGoal } from "../../data/create-data.js";

export default function Register() {
  const router = useRouter();

  var error = "";

  const register = async (event) => {
    event.preventDefault(); // don't redirect the page
    // where we'll add our form logic

    const name = event.target.name.value;
    const description = event.target.description.value;
    const endDate = event.target.endDate.value;
    const need = event.target.need.value;

    const result = await registerGoal(name, description, endDate, need);

    if (result.id) {
      router.push("/goals/" + result.id);
    } else {
      console.log(result.need);
      error = result.need;
    }
  };

  return (
    <>
      <Layout cond="false" card="off">
        <div className="relative flex flex-col min-w-0 break-words bg-white mb-6 shadow-lg rounded lg:w-2/5 mx-auto">
          <RegisterForm onClick={register} error={error} />
        </div>
      </Layout>
    </>
  );
}
