import RegisterStepForm from "../../../../components/Forms/RegisterStepForm.js";
import Layout from "../../../../components/layout.js";
import { useRouter } from "next/router";
import React from "react";
import { useNeeds } from "../../../../data/use-data";
import { registerStep } from "../../../../data/create-data.js";

export default function Register() {
  const router = useRouter();
  const { pid } = router.query;
  var error = "";

  const register = async (event) => {
    event.preventDefault(); // don't redirect the page

    const name = event.target.name.value;
    const description = event.target.description.value;
    const completed = false;
    const goal = pid;

    const result = await registerStep(name, description, completed, goal);

    if (result.id) {
      router.push({
        pathname: "/goals/[pid]",
        query: { pid: pid },
      });
    } else {
      console.log(result.need);
      error = result.need;
    }
  };

  return (
    <>
      <Layout cond="false" card="off">
        <div className="relative flex flex-col min-w-0 break-words bg-white mb-6 shadow-lg rounded lg:w-2/5 mx-auto">
          <RegisterStepForm onClick={register} error={error} />
        </div>
      </Layout>
    </>
  );
}
