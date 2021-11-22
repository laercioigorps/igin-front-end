import { useActiveIteration, useTasksByGoal } from "../../data/use-data";
import Link from "next/link";
import WarningNoActiveIteration from "../warnings/WarningNoActiveIteration";
import { editTask } from "../../data/edit-data";

function CardTasksByGoalAndIterationList(props) {
  const { iteration, iterationLoading, iterationLoggedOut, iterationError } =
    useActiveIteration();
  const { tasks, tasksLoading, tasksError, tasksLoggedOut, tasksMutate } =
    useTasksByGoal(props.goal ? props.goal : null);
  console.log(tasks);

  async function handleChange(task) {

    const result = await editTask(
      task.id,
      task.name,
      task.description,
      task.iteration,
      task.step,
      !task.completed
    );

    if (result.id) {
      console.log("done");
    } else {
      console.log(result);
    }
    tasksMutate();
  }

  const list =
    tasks && iteration
      ? tasks.map((task) =>
          task.iteration == iteration.id && task.completed == false? (
            <tr
              key={task.id}
              className={
                task.completed === true ? "line-through text-gray-600" : ""
              }
            >
              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4 text-left ">
                <Link href={"/tasks/" + task.id}>
                  <a className="hover:text-blue-600 ">{task.name}</a>
                </Link>
              </th>
              <td className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                {task.step}
              </td>
              <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap text-center ">
                <input
                  type="checkbox"
                  name={"task" + task.id}
                  id={task.id}
                  checked={task.completed === true ? "checked" : ""}
                  onChange={() => handleChange(task)}
                />
              </td>
            </tr>
          ) : null
        )
      : null;

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                To do
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <button
                className="bg-green-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Edit
              </button>
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
          {iteration ? (
            <table className="items-center w-full bg-transparent border-collapse ">
              <thead>
                <tr>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Tasks
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Step
                  </th>

                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Completed
                  </th>
                </tr>
              </thead>
              <tbody>{list}</tbody>
            </table>
          ) : (
            <WarningNoActiveIteration />
          )}
        </div>
      </div>
    </>
  );
}
export default CardTasksByGoalAndIterationList;
