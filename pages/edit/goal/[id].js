import RegisterForm from "../../../components/Forms/RegisterGoalForm";
import Layout from "../../../components/layout.js";
import { useRouter } from "next/router";
import React from "react";
import {useNeeds, useGoal} from "../../../data/use-data";

export default function EditGoal() {
  const router = useRouter();
  const { id } = router.query;
  const { goal, goalLoading, goalError } = useGoal(id ? id : null);
  console.log("aiaiai")
  console.log(goal)
  var error = "";

  const edit = async (event) => {
    event.preventDefault(); // don't redirect the page
    // where we'll add our form logic

    const res = await fetch("http://127.0.0.1:8000/goal/"+id+"/", {
      body: JSON.stringify({
        name: event.target.name.value,
        description: event.target.description.value,
        endDate: event.target.endDate.value,
        need: event.target.need.value,
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
          <RegisterForm onClick={edit} error={error} goal={goal} />
        </div>
      </Layout>
    </>
  );
}
