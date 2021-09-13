import IterationForm from "../../../components/Forms/IterationForm.js";
import Layout from "../../../components/layout.js";
import { useRouter } from "next/router";
import React from "react";
import { useIteration } from "../../../data/use-data.js";

export default function EditGoal() {
  const router = useRouter();
  const { id } = router.query;
  const { iteration, iterationLoading, iterationError } = useIteration(id ? id : null);
  console.log("aiaiai")
  console.log(iteration)
  var error = "";

  const edit = async (event) => {
    event.preventDefault(); // don't redirect the page
    // where we'll add our form logic

    const res = await fetch("http://127.0.0.1:8000/iteration/"+id+"/", {
      body: JSON.stringify({
        number: event.target.number.value,
        date: event.target.date.value,
        completed: event.target.completed.checked,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.token,
      },
      method: "PUT",
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
          <IterationForm onClick={edit} error={error} iteration={iteration} />
        </div>
      </Layout>
    </>
  );
}
