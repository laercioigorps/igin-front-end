import Layout from "../../components/layout";
import { useRouter } from "next/router";
import React from "react";
import IterationForm from "../../components/Forms/IterationForm.js";
import { useIteration } from "../../data/use-data";
import { registerIteration } from "../../data/create-data";

export default function Register() {
  const router = useRouter();
  const { pid } = router.query;
  var error = "";

  const register = async (event) => {
    event.preventDefault(); // don't redirect the page
    // where we'll add our form logic

    const number = event.target.number.value;
    const date = event.target.date.value;
    const completed = false;

    const result = await registerIteration(number, date, completed);

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
