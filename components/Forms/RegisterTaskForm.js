import { useRouter } from "next/router";
//import useGoals from "../../data/use-goals";

export default function RegisterTaskForm(props) {
  // const { data, loading, loggedOut, error} = useGoals();
  //   console.log(data)
  //   console.log("locading: "+ loading)
  //   console.log("loggedOut:" +loggedOut)

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <form onSubmit={props.onClick}>
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="name"
          >
            Task
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="name"
            type="text"
            placeholder="your step here"
            defaultValue={props.task ? props.task.name : ""}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="description"
            type="password"
            placeholder=""
            defaultValue={props.task ? props.task.description : ""}
          ></textarea>
          <p className="text-red text-xs italic">{props.error}</p>
        </div>

        {props.task ? (
          <>
            {/* <div className="mb-4">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="step"
              >
                Step
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="step"
                type="text"
                placeholder="your step here"
                defaultValue={props.task ? props.task.step : ""}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="name"
              >
                Iteration
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="name"
                type="text"
                placeholder="your step here"
                defaultValue={props.task ? props.task.iteration : ""}
              />
            </div> */}
            <div className="mb-4">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="completed"
              >
                Completed
              </label>
              <input
                className=""
                id="completed"
                type="checkbox"
                defaultChecked={props.task ? props.task.completed : ""}
              />
            </div>{" "}
          </>
        ) : (
          ""
        )}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mx-auto"
            type="submit"
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
}
