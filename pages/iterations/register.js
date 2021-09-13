import Layout from "../../components/layout";
import { useRouter } from "next/router";
import React from "react";
import IterationForm from "../../components/Forms/IterationForm.js";
import { useIteration } from "../../data/use-data";

export default function Register() {
  const router = useRouter();
  const { pid } = router.query;
  var error = "";

  const register = async (event) => {
    event.preventDefault(); // don't redirect the page
    // where we'll add our form logic

    const res = await fetch("http://127.0.0.1:8000/iteration/", {
      body: JSON.stringify({
        number: event.target.number.value,
        date: event.target.date.value,
        completed: false,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.token,
      },
      method: "POST",
    });

    const result = await res.json();

    console.log(result);
    if (result.id) {
      router.push("/iterations");
    } else {
      console.log(result.need);
      error = result.need;
    }
  };

  return (
    <>
      <Layout cond="false" card="off">
        <div className="relative flex flex-col min-w-0 break-words bg-white mb-6 shadow-lg rounded lg:w-2/5 mx-auto">
          <IterationForm onClick={register} error={error} />
        </div>
      </Layout>
    </>
  );
}
