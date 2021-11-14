import RegisterStepForm from "../../../components/Forms/RegisterStepForm";
import Layout from "../../../components/layout.js";
import { useRouter } from "next/router";
import React from "react";
import { useNeeds, useStep } from "../../../data/use-data";
import DeleteButton from "../../../components/Button/DeleteButton";
import { editStep } from "../../../data/edit-data";
import { deleteStep } from "../../../data/delete-data";

export default function EditStep() {
  const router = useRouter();
  const { id } = router.query;
  const { step, stepLoading, stepError } = useStep(id ? id : null);
  var error = "";

  const edit = async (event) => {
    event.preventDefault(); // don't redirect the page
    // where we'll add our form logic

    const name = event.target.name.value;
    const description = event.target.description.value;
    const completed = step.completed;
    const goal = step.goal;

    const result = await editStep(id, name, description, completed, goal);

    if (result.id) {
      router.push({
        pathname: "/goals/steps/[id]",
        query: { id: step.id },
      });
    } else {
      console.log(result.need);
      error = result.need;
    }
  };

  const delStep = async (event) => {
    event.preventDefault(); // don't redirect the page
    // where we'll add our form logic

    const resp = deleteStep(id)
    router.push({
      pathname: "/goals/[id]",
      query: { id: step.goal },
    });
  };

  return (
    <>
      <Layout cond="false" card="off">
        <div className="relative flex flex-col min-w-0 break-words bg-white mb-6 shadow-lg rounded lg:w-2/5 mx-auto">
          <RegisterStepForm onClick={edit} error={error} step={step} />
        </div>
        <div className="relative flex flex-col min-w-0 break-words bg-white mb-6 shadow-lg rounded lg:w-2/5 mx-auto">
          <DeleteButton onClick={delStep} />
        </div>
      </Layout>
    </>
  );
}
