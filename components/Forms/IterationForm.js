import { useRouter } from "next/router";

export default function IterationForm(props) {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <form onSubmit={props.onClick}>
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="number"
          >
            Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="number"
            type="number"
            placeholder="number of iteration"
            defaultValue={props.iteration ? props.iteration.number : null}
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="date"
          >
            End Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="date"
            type="date"
            defaultValue={props.iteration ? props.iteration.date : null}
          />
          <p className="text-red text-xs italic">{props.error}</p>
        </div>
        {props.iteration ? (
          <>
            <div className="mb-4">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="completed"
              >
                Completed
              </label>
              <input
               id="completed"
                type="checkbox"
                defaultChecked={props.iteration.completed}
                name="completed"
              />
            </div>
          </>
        ) : null}

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
