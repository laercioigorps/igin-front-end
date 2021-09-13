import useSWR from "swr";

const fetcher = async (url, token) => {
  const res = await fetch(url, {
    method: "get",
    headers: new Headers({
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Token " + token,
    }),
  });

  if (!res.ok) {
    const error = new Error("An error ocurred while fetching the data");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export function useUser() {
  const loggedOut = !(
    typeof window !== "undefined" && localStorage.getItem("token") != "null"
  );

  const { data, error } = useSWR(
    !loggedOut
      ? ["http://127.0.0.1:8000/rest-auth/user/", localStorage.token]
      : null,
    fetcher
  );
  //const { data, error } = useSWR( ()=>(["http://127.0.0.1:8000/rest-auth/user/", localStorage.token]), fetcher);

  const loading = !data && !error && !loggedOut;

  return {
    loading,
    loggedOut,
    user: data,
  };
}

export function useActiveIteration() {
  const loggedOut = !(
    typeof window !== "undefined" && localStorage.getItem("token") != "null"
  );
  const { data, error } = useSWR(
    !loggedOut
      ? ["http://127.0.0.1:8000/iteration/active/", localStorage.token]
      : null,
    fetcher
  );

  const loading = !data && !error;

  return {
    iterationLoading: loading,
    loggedOut,
    iteration: data,
    iterationError: error,
  };
}

export function useIterations() {
  const loggedOut = !(
    typeof window !== "undefined" && localStorage.getItem("token") != "null"
  );
  const { data, error } = useSWR(
    !loggedOut
      ? ["http://127.0.0.1:8000/iteration/", localStorage.token]
      : null,
    fetcher
  );

  const loading = !data && !error;

  return {
    iterationsLoading: loading,
    iterationsLoggedOut: loggedOut,
    iterations: data,
    iterationsError: error,
  };
}

export function useIteration(id) {
  const loggedOut = !(
    typeof window !== "undefined" && localStorage.getItem("token") != "null"
  );
  const { data, error } = useSWR(
    !loggedOut
      ? ["http://127.0.0.1:8000/iteration/" + id + "/", localStorage.token]
      : null,
    fetcher
  );

  const loading = !data && !error;

  return {
    iterationLoading: loading,
    iterationLoggedOut: loggedOut,
    iteration: data,
    iterationError: error,
  };
}

export function useGoals() {
  const loggedOut = !(
    typeof window !== "undefined" && localStorage.getItem("token") != "null"
  );
  const { data, error } = useSWR(
    !loggedOut ? ["http://127.0.0.1:8000/goal/", localStorage.token] : null,
    fetcher
  );

  const loading = !data && !error;

  return {
    goalsLoading: loading,
    goalsLoggedOut: loggedOut,
    goals: data,
  };
}

export function useGoal(id) {
  const loggedOut = !(
    typeof window !== "undefined" && localStorage.getItem("token") != "null"
  );
  const { data, error } = useSWR(
    !loggedOut && id
      ? ["http://127.0.0.1:8000/goal/" + id, localStorage.token]
      : null,
    fetcher
  );

  const loading = !data && !error;

  return {
    goalLoading: loading,
    goalLoggedOut: loggedOut,
    goal: data,
    goalError: error,
  };
}

export function useNeeds() {
  const loggedOut = !(
    typeof window !== "undefined" && localStorage.getItem("token") != "null"
  );
  const { data, error } = useSWR(
    !loggedOut ? ["http://127.0.0.1:8000/need/", localStorage.token] : null,
    fetcher
  );

  const loading = !data && !error && !loggedOut;

  return {
    needsLoading: loading,
    needsLoggedOut: loggedOut,
    needs: data,
    needsError: error,
  };
}

export function useSteps(goal) {
  const loggedOut = !(
    typeof window !== "undefined" && localStorage.getItem("token") != "null"
  );
  const { data, error } = useSWR(
    !loggedOut && goal
      ? ["http://127.0.0.1:8000/" + goal + "/steps/", localStorage.token]
      : null,
    fetcher
  );

  const loading = !data && !error;
  3;

  return {
    loading,
    loggedOut,
    data: data,
  };
}

export function useStep(id) {
  const loggedOut = !(
    typeof window !== "undefined" && localStorage.getItem("token") != "null"
  );
  const { data, error } = useSWR(
    !loggedOut && id
      ? ["http://127.0.0.1:8000/step/" + id, localStorage.token]
      : null,
    fetcher
  );

  const loading = !data && !error;
  3;

  return {
    stepLoading: loading,
    stepLoggedOut: loggedOut,
    step: data,
  };
}

export function useTasks(step) {
  const loggedOut = !(
    typeof window !== "undefined" && localStorage.getItem("token") != "null"
  );
  const { data, error, mutate } = useSWR(
    !loggedOut && step
      ? ["http://127.0.0.1:8000/" + step + "/delivery/", localStorage.token]
      : null,
    fetcher
  );

  const loading = !data && !error;
  3;

  return {
    loading,
    loggedOut,
    data: data,
    mutate,
  };
}

export function useTask(id) {
  const loggedOut = !(
    typeof window !== "undefined" && localStorage.getItem("token") != "null"
  );
  const { data, error } = useSWR(
    !loggedOut && id
      ? ["http://127.0.0.1:8000/delivery/" + id, localStorage.token]
      : null,
    fetcher
  );

  const loading = !data && !error;

  return {
    loading,
    loggedOut,
    data: data,
  };
}

export function useTasksByIteration(iteration) {
  const loggedOut = !(
    typeof window !== "undefined" && localStorage.getItem("token") != "null"
  );
  const { data, error, mutate } = useSWR(
    !loggedOut && iteration
      ? [
          "http://127.0.0.1:8000/iteration/" + iteration + "/delivery/",
          localStorage.token,
        ]
      : null,
    fetcher
  );
  const loading = !data && !error;

  return {
    tasksLoading: loading,
    tasksLoggedOut: loggedOut,
    tasks: data,
    tasksError: error,
    tasksMutate: mutate,
  };
}

export function useTasksByStep(step) {
  const loggedOut = !(
    typeof window !== "undefined" && localStorage.getItem("token") != "null"
  );
  const { data, error, mutate } = useSWR(
    !loggedOut && step
      ? ["http://127.0.0.1:8000/" + step + "/delivery/", localStorage.token]
      : null,
    fetcher
  );

  const loading = !data && !error;

  return {
    tasksLoading: loading,
    tasksLoggedOut: loggedOut,
    tasks: data,
    tasksError: error,
    tasksMutate: mutate,
  };
}

export function useTasksByGoal(goal) {
  const loggedOut = !(
    typeof window !== "undefined" && localStorage.getItem("token") != "null"
  );
  const { data, error, mutate } = useSWR(
    !loggedOut && goal
      ? [
          "http://127.0.0.1:8000/" + goal + "/delivery_by_goal/",
          localStorage.token,
        ]
      : null,
    fetcher
  );

  const loading = !data && !error;

  return {
    tasksLoading: loading,
    tasksLoggedOut: loggedOut,
    tasks: data,
    tasksError: error,
    tasksMutate: mutate,
  };
}
