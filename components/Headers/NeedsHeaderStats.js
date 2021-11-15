import React from "react";
import { wizardSet } from "../../data/create-data";
import useNeeds from "../../data/use-needs";

// components

import CardStats from "../Cards/CardStats.js";

export default function HeaderStats({card, statsList, wizard}) {

  const { data, loading, loggedOut} = useNeeds();

  const wizardSetup = async event => {
      event.preventDefault() // don't redirect the page
      // where we'll add our form logic

      const result = await wizardSet()
      
      console.log(result)
      if(result.key){
        console.log(result.key)
        localStorage.setItem('token', result.key)
        if(localStorage.token){
          router.push('/dashboard')
        }
    }else{
      console.log(result)
    }


  }

  const wizardButton = <button 
    class="mx-auto py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
    onClick={wizardSetup}
    >
      Click me to start using your app
  </button>

  var statsListToDisplay = ""
  if (statsList){
    var statsListToDisplay = statsList.map(
      (stat) => <div key={stat.id} className="w-full lg:w-6/12 xl:w-1/5 px-2">
                <CardStats
                  statSubtitle={stat.statSubtitle}
                  statTitle={stat.statTitle}
                  statArrow={stat.statArrow}
                  statPercent={stat.statPercent}
                  statPercentColor={stat.statPercentColor}
                  statDescripiron={stat.statDescripiron}
                  statIconName={stat.statIconName}
                  statIconColor={stat.statIconColor}
                />
              </div>

    )
  }
  else{
    statsListToDisplay = 
    <>
    <div className="w-full lg:w-6/12 xl:w-1/5 px-2">
                <CardStats
                  statSubtitle="HEALTH"
                  statTitle="--"
                  statArrow="down"
                  statPercent="--"
                  statPercentColor="text-yellow-500"
                  statDescripiron="last month"
                  statIconName="far fa-heart"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-1/5 px-2">
                <CardStats
                  statSubtitle="FINANCE"
                  statTitle="--"
                  statArrow="down"
                  statPercent="-"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-1/5 px-2">
                <CardStats
                  statSubtitle="PROFESsional"
                  statTitle="--"
                  statArrow="down"
                  statPercent="-"
                  statPercentColor="text-orange-500"
                  statDescripiron="yesterday"
                  statIconName="fas fa-user-tie"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-1/5 px-2">
                <CardStats
                  statSubtitle="MIND"
                  statTitle="--"
                  statArrow="up"
                  statPercent="-"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-code-branch"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-1/5 px-2">
                <CardStats
                  statSubtitle="OTHERS"
                  statTitle="--"
                  statArrow="up"
                  statPercent="-"
                  statPercentColor="text-green-500"
                  statDescripiron="last month"
                  statIconName="far fa-handshake"
                  statIconColor="bg-red-500"
                />
              </div> 
      </>
  }

  function getContent(){
    if(loading){

    }

  }

  return (
    <>
      {/* Header */}
      <div className="relative bg-blue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap" style={card == 'off' ? {'display':"none"} : {}}>

             {/* {!data ? wizardButton :  statsListToDisplay}*/}
             {len()}
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
