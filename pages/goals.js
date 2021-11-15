import React from "react";
import {useUser} from "../data/use-data";
import { useRouter } from "next/router";
import { useEffect } from "react";
// components
import Layout from "../components/layout";
// import CardLineChart from "../components/Cards/CardLineChart.js";
// import CardBarChart from "../components/Cards/CardBarChart.js";
import CardGoalList from "../components/Cards/CardGoalList";
import PieChart from "../components/Cards/CardGoalsPieChart";

export default function Goals() {
  const { goals, loading, loggedOut } = useUser();
  const router = useRouter();
  useEffect(() => (loggedOut ? router.push("/auth/login") : null));

  const stats = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      <Layout statsList={false}>
        <div className="flex flex-wrap mt-4">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <CardGoalList />
          </div>
          <div className="w-full xl:w-4/12 px-4">
            <PieChart />
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
}
