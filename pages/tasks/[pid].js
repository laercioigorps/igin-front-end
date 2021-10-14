import { useRouter } from "next/router";
import Layout from "../../components/layout";
import LoginForm from "../../components/auth/LoginForm";
import RegisterTaskForm from "../../components/Forms/RegisterTaskForm";
import { useTask } from "../../data/use-data";

const Post = () => {
  const router = useRouter();
  const { pid } = router.query;
  const {task} = useTask(pid ? pid : null)
  console.log(task)

  const stats = [
    {
      id: 1,
      statSubtitle: "Status",
      statTitle: "Active",
      statArrow: "down",
      statPercent: "3.48",
      statPercentColor: "text-yellow-500",
      statDescripiron: "last month",
      statIconName: "far fa-heart",
      statIconColor: "bg-red-500",
    },
    {
      id: 2,
      statSubtitle: "Need",
      statTitle: "Health",
      statArrow: "down",
      statPercent: "3.48",
      statPercentColor: "text-yellow-500",
      statDescripiron: "last month",
      statIconName: "far fa-heart",
      statIconColor: "bg-red-500",
    },
    {
      id: 3,
      statSubtitle: "completed",
      statTitle: "66%",
      statArrow: "down",
      statPercent: "3.48",
      statPercentColor: "text-yellow-500",
      statDescripiron: "last month",
      statIconName: "far fa-heart",
      statIconColor: "bg-red-500",
    },
    {
      id: 4,
      statSubtitle: "HEALTH",
      statTitle: "6.5",
      statArrow: "down",
      statPercent: "3.48",
      statPercentColor: "text-yellow-500",
      statDescripiron: "last month",
      statIconName: "far fa-heart",
      statIconColor: "bg-red-500",
    },
    {
      id: 5,
      statSubtitle: "HEALTH",
      statTitle: "6.5",
      statArrow: "down",
      statPercent: "3.48",
      statPercentColor: "text-yellow-500",
      statDescripiron: "last month",
      statIconName: "far fa-heart",
      statIconColor: "bg-red-500",
    },
  ];

  return (
    <>
      <Layout statsList={stats}>
        <div className="flex flex-wrap mt-4">
          {/*<div className="w-full mb-12 xl:mb-0 px-4">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded text-center p-5">
        <h1 className="text-4xl">Get a software develloper job</h1>
        <p className="mt-4">Loren ipsum xxxxx</p>
        </div>
      </div>*/}
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto">
            {/* <CardTasksByStepList tasks={tasks} step={pid} /> */}
            <div className="relative flex flex-col min-w-0 break-words bg-white w-3/4 mb-6 shadow-lg rounded mx-auto" >
            <RegisterTaskForm task={task}/>
            </div>
            
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
