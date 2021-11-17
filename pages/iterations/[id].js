import { useRouter } from "next/router";
import Layout from "../../components/layout";
import LoginForm from "../../components/auth/LoginForm";
import RegisterTaskForm from "../../components/Forms/RegisterTaskForm";
import { useIteration, useTask } from "../../data/use-data";
import CardTasksByIterationList from "../../components/Cards/CardTasksByIterationList";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  //const { task, taskMutate } = useTask(pid ? pid : null);
  const { iteration, iterationLoading } = useIteration(id ? id : null);
    
  const stats = iteration
    ? [
        {
          id: 1,
          statSubtitle: "Iteration",
          statTitle: iteration ? iteration.number : "none",
          statArrow: "down",
          statPercent: "3.48",
          statPercentColor: "text-yellow-500",
          statDescripiron: "last month",
          statIconName: "far fa-heart",
          statIconColor: "bg-red-500",
        },
        {
          id: 2,
          statSubtitle: "Status",
          statTitle: iteration.completed ? "Done": "active",
          statArrow: "down",
          statPercent: "3.48",
          statPercentColor: "text-yellow-500",
          statDescripiron: "last month",
          statIconName: "far fa-heart",
          statIconColor: "bg-red-500",
        },
        {
          id: 3,
          statSubtitle: "End-Date",
          statTitle: iteration ? iteration.date : "",
          statArrow: "down",
          statPercent: "3.48",
          statPercentColor: "text-yellow-500",
          statDescripiron: "last month",
          statIconName: "far fa-heart",
          statIconColor: "bg-red-500",
        },
        {
          id: 4,
          statSubtitle: "",
          statTitle: "",
          statArrow: "",
          statPercent: "",
          statPercentColor: "",
          statDescripiron: "",
          statIconName: "",
          statIconColor: "",
        },
        {
          id: 5,
          statSubtitle: "",
          statTitle: "",
          statArrow: "",
          statPercent: "",
          statPercentColor: "",
          statDescripiron: "",
          statIconName: "",
          statIconColor: "",
        },
      ]
    : [];

  return (
    <>
      <Layout statsList={stats} loginRequired={true}>
        <div className="flex flex-wrap mt-4">
          {/*<div className="w-full mb-12 xl:mb-0 px-4">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded text-center p-5">
        <h1 className="text-4xl">Get a software develloper job</h1>
        <p className="mt-4">Loren ipsum xxxxx</p>
        </div>
      </div>*/}
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto">
            
            <CardTasksByIterationList iteration= {id ? id : null} edit={iteration ? "/edit/iteration/"+ iteration.id : null}/>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-3/4 mb-6 shadow-lg rounded mx-auto"></div>
          </div>
        </div>
        {/*<div className="flex flex-wrap">
      <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
        <CardLineChart />
      </div>
      <div className="w-full xl:w-4/12 px-4">
        <CardBarChart />
      </div>
    </div>*/}
      </Layout>
    </>
  );
};

export default Post;
