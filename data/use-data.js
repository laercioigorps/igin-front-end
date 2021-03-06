import useSWR from "swr";
import { URL } from "./api";

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
    typeof window !== "undefined" && localStorage.getItem("token") != null
  );

  const { data, error } = useSWR(
    !loggedOut ? [URL + "/rest-auth/user/", localStorage.token] : null,
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
    !loggedOut ? [URL + "/iteration/active/", localStorage.token] : null,
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
    !loggedOut ? [URL + "/iteration/", localStorage.token] : null,
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
    !loggedOut && id
      ? [URL + "/iteration/" + id + "/", localStorage.token]
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

export function useGoals() {
  const loggedOut = !(
    typeof window !== "undefined" && localStorage.getItem("token") != "null"
  );
  const { data, error } = useSWR(
    !loggedOut ? [URL + "/goal/", localStorage.token] : null,
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
    !loggedOut && id ? [URL + "/goal/" + id, localStorage.token] : null,
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
  const { data, error, mutate } = useSWR(
    !loggedOut ? [URL + "/need/", localStorage.token] : null,
    fetcher
  );

  const loading = !data && !error && !loggedOut;

  return {
    needsLoading: loading,
    needsLoggedOut: loggedOut,
    needs: data,
    needsError: error,
    needsMutate: mutate,
  };
}

export function useSteps(goal) {
  const loggedOut = !(
    typeof window !== "undefined" && localStorage.getItem("token") != "null"
  );
  const { data, error } = useSWR(
    !loggedOut && goal
      ? [URL + "/" + goal + "/steps/", localStorage.token]
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
  const { data, error, mutate } = useSWR(
    !loggedOut && id ? [URL + "/step/" + id, localStorage.token] : null,
    fetcher
  );

  const loading = !data && !error;
  3;

  return {
    stepLoading: loading,
    stepLoggedOut: loggedOut,
    step: data,
    stepMutate: mutate,
  };
}

export function useTasks(step) {
  const loggedOut = !(
    typeof window !== "undefined" && localStorage.getItem("token") != "null"
  );
  const { data, error, mutate } = useSWR(
    !loggedOut && step
      ? [URL + "/" + step + "/delivery/", localStorage.token]
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
  const { data, error, mutate } = useSWR(
    !loggedOut && id ? [URL + "/delivery/" + id, localStorage.token] : null,
    fetcher
  );

  const loading = !data && !error;

  return {
    taskLoading: loading,
    taskLoggedOut: loggedOut,
    task: data,
    taskMutate: mutate,
  };
}

export function useTasksByIteration(iteration) {
  const loggedOut = !(
    typeof window !== "undefined" && localStorage.getItem("token") != "null"
  );
  const { data, error, mutate } = useSWR(
    !loggedOut && iteration
      ? [URL + "/iteration/" + iteration + "/delivery/", localStorage.token]
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
      ? [URL + "/" + step + "/delivery/", localStorage.token]
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
      ? [URL + "/" + goal + "/delivery_by_goal/", localStorage.token]
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
