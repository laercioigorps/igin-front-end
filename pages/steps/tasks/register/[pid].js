import RegisterTaskForm from "../../../../components/Forms/RegisterTaskForm.js";
import Layout from "../../../../components/layout.js";
import { useRouter } from "next/router";
import React from "react";
import {useNeeds} from "../../../../data/use-data";
import { registerIteration, registerTask } from "../../../../data/create-data.js";

export default function Register() {
  const router = useRouter();
  const { pid } = router.query;
  var error = "";

  const register = async (event) => {
    event.preventDefault(); // don't redirect the page

    const name = event.target.name.value;
    const description = event.target.description.value;
    const completed = false;
    const step = pid

    const result = await registerTask(name, description, completed, step);

    if (result.id) {
      router.push("/goals/steps/" + pid);
    } else {
      console.log(result.need);
      error = result.need;
    }
  };

  return (
    <>
      <Layout cond="false" card="off">
        <div className="relative flex flex-col min-w-0 break-words bg-white mb-6 shadow-lg rounded lg:w-2/5 mx-auto">
          <RegisterTaskForm onClick={register} error={error} />
        </div>
      </Layout>
    </>
  );
}
