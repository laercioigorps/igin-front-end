import { useRouter } from "next/router";
import { useNeeds } from "../../data/use-data";

export default function RegisterForm(props) {
  const { needs, needsLoading, needsLoggedOut, needsError } = useNeeds();
  console.log(needs);
  console.log("locading: " + needsLoading);
  console.log("loggedOut:" + needsLoggedOut);

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <form onSubmit={props.onClick}>
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="name"
          >
            Goal
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="name"
            type="text"
            placeholder="your goal here"
            defaultValue={props.goal ? props.goal.name : null}
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
            defaultValue={props.goal ? props.goal.description : null}
          />
          <p className="text-red text-xs italic">{props.error}</p>
        </div>

        <div className="mb-6">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="endDate"
          >
            End Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="endDate"
            type="date"
            defaultValue={props.goal ? props.goal.endDate : null}
          />
          <p className="text-red text-xs italic">{props.error}</p>
        </div>

        <div className="mb-6">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="need"
          >
            Related Need
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="need"
            type="select"
            defaultValue="7"
          >
            {needs
              ? needs.map((need) => (
                  <option
                    key={need.id}
                    value={need.id}
                    selected={
                      props.goal
                        ? props.goal.need.id == need.id
                          ? true
                          : false
                        : false
                    }
                  >
                    {need.name}
                  </option>
                ))
              : null}
          </select>
          <p className="text-red text-xs italic">{props.error}</p>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
}
