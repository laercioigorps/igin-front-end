import { useRouter } from "next/router";
import Link from "next/link";

export default function RegisterForm(props) {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <form onSubmit={props.onClick}>
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="username"
            type="text"
            placeholder="Username"
          />
          {props.usernameError
            ? props.usernameError.map((error) => (
                <p className="text-red-500 text-xs italic">{error}</p>
              ))
            : null}
        </div>
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="email"
            type="email"
            placeholder="Your email"
          />
          {props.emailError
            ? props.emailError.map((error) => (
                <p className="text-red-500 text-xs italic">{error}</p>
              ))
            : null}
        </div>
        <div className="mb-6">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="password1"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="password1"
            type="password"
            placeholder="******************"
          />
          {props.password1Error
            ? props.password1Error.map((error) => (
                <p className="text-red-500 text-xs italic">{error}</p>
              ))
            : null}
        </div>
        <div className="mb-6">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="password2"
          >
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="password2"
            type="password"
            placeholder="******************"
          />
          {props.password2Error
            ? props.password2Error.map((error) => (
                <p className="text-red-500 text-xs italic">{error}</p>
              ))
            : null}
        </div>
        {props.nonFieldError
          ? props.nonFieldError.map((error) => (
              <p className="text-red-500 text-xs italic">{error}</p>
            ))
          : null}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Register
          </button>
          <Link href={props.loginURL}>
            <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker">
              Already has an account?
            </a>
          </Link>
        </div>
      </form>
    </div>
  );
}
