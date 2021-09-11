import { useTasks } from "../../data/use-data";
import { useActiveIteration } from "../../data/use-data";
import Link from "next/link";

function CardTasksByStepList(props) {
  const { data, loading, loggedOut, mutate } = useTasks(props.step);
  console.log(data);

  const { iteration, iterationLoading, iterationLoggedOut } =
    useActiveIteration();

  const setIteration = async (id, ind, value) => {
    event.preventDefault(); // don't redirect the page
    // where we'll add our form logic

    const res = await fetch("http://127.0.0.1:8000/delivery/" + id + "/", {
      body: JSON.stringify({
        name: data[ind].name,
        description: data[ind].description,
        step: data[ind].step,
        iteration: value,
        completed: data[ind].completed,
      }),
      headers: {
        Authorization: "Token " + localStorage.token,
        "Content-Type": "application/json",
      },
      method: "PUT",
    });

    const result = await res.json();

    console.log(result);
    if (result.id) {
      console.log("conseguiu otario");
    } else {
      console.log(result);
    }
    mutate();
  };

  const list = data
    ? data.map((task, ind) => (
        <tr
          key={task.id}
          className={
            task.completed === true ? "line-through text-gray-600" : ""
          }
        >
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4 text-left">
            <Link href={"/tasks/" + task.id}>
              <a className="hover:text-blue-600">{task.name}</a>
            </Link>
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4">
            {task.description}
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            <button
              className="bg-blue-500 p-1 border-solid border-4 border-light-blue-500 rounded-full"
              onClick={() =>
                task.completed === true
                  ? alert("edit")
                  : task.iteration == iteration.id
                  ? setIteration(task.id, ind, null)
                  : setIteration(task.id, ind, iteration.id)
              }
            >
              {task.completed === true
                ? "Detail"
                : task.iteration == iteration.id
                ? "Remove"
                : "Add"}
            </button>
          </td>
        </tr>
      ))
    : null;

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                All tasks{" "}
                <Link>
                  <a
                    className="text-blue-500 text-xs"
                    href={"/edit/step/" + props.step}
                  >
                    (Edit Step)
                  </a>
                </Link>
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <Link href={"/steps/tasks/register/" + props.step}>
                <button
                  className="bg-green-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Add new
                </button>
              </Link>
              <button
                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                See All
              </button>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  task
                </th>

                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Description
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>{list}</tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default CardTasksByStepList;
