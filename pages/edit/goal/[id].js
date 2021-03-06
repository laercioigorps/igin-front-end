import RegisterForm from "../../../components/Forms/RegisterGoalForm.js";
import Layout from "../../../components/layout.js";
import { useRouter } from "next/router";
import React from "react";
import { useNeeds, useGoal } from "../../../data/use-data";
import DeleteButton from "../../../components/Button/DeleteButton";
import { editGoal } from "../../../data/edit-data";
import { deleteGoal } from "../../../data/delete-data";

export default function EditGoal() {
  const router = useRouter();
  const { id } = router.query;
  const { goal, goalLoading, goalError } = useGoal(id ? id : null);
  var error = "";

  const edit = async (event) => {
    event.preventDefault(); // don't redirect the page
    // where we'll add our form logic

    const name = event.target.name.value;
    const description = event.target.description.value;
    const endDate = event.target.endDate.value;
    const need = event.target.need.value;

    const result = await editGoal(id, name, description, endDate, need);

    if (result.id) {
      router.push("/goals/" + result.id);
    } else {
      error = result.need;
    }
  };

  const delGoal = async (event) => {
    event.preventDefault(); // don't redirect the page
    // where we'll add our form logic

    const resp = deleteGoal(id);
    router.push({
      pathname: "/goals/",
    });
  };

  return (
    <>
      <Layout cond="false" card="off" loginRequired={true}>
        <div className="relative flex flex-col min-w-0 break-words bg-white mb-6 shadow-lg rounded lg:w-2/5 mx-auto">
          <RegisterForm onClick={edit} error={error} goal={goal} />
        </div>
        <div className="relative flex flex-col min-w-0 break-words bg-white mb-6 shadow-lg rounded lg:w-2/5 mx-auto">
          <DeleteButton onClick={delGoal} />
        </div>
      </Layout>
    </>
  );
}
