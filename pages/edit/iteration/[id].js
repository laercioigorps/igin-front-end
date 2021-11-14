import IterationForm from "../../../components/Forms/IterationForm.js";
import Layout from "../../../components/layout.js";
import { useRouter } from "next/router";
import React from "react";
import { useIteration } from "../../../data/use-data.js";
import { editIteration } from "../../../data/edit-data.js";

export default function EditGoal() {
  const router = useRouter();
  const { id } = router.query;
  const { iteration, iterationLoading, iterationError } = useIteration(
    id ? id : null
  );
  console.log("aiaiai");
  console.log(iteration);
  var error = "";

  const edit = async (event) => {
    event.preventDefault(); // don't redirect the page

    const number = event.target.number.value;
    const date = event.target.date.value;
    const completed = event.target.completed.checked;

    const result = await editIteration(id, number, date, completed);

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
