export default function WarningNoActiveIteration() {
  return (
    <div className="mx-auto">
      <p className="text-center">
        You dont have an active Iteration,{" "}
        <a className="text-blue-500" href="/iterations/register">
          click to continue
        </a>
      </p>
    </div>
  );
}
