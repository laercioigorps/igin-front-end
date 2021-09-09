import { Pie } from "react-chartjs-2";
import { useGoals } from "../../data/use-data";

function getInfo(goals) {
  var result = { label: [], data: [] };
  goals.forEach((goal, index) => {
    var count = 0;
    if (!result.label.includes(goal.need.name)) {
      goals.forEach((goa, ind) => {
        if (goal.need.name === goa.need.name) {
          count++;
        }
      });
      result.label.push(goal.need.name);
      result.data.push(count);
    }
  });

  return result;
}

function PieChart() {
  const { goals, goalsLoading, goalsLoggedOut } = useGoals();
  var datas = [];
  var labeles = [];
  var result = goals ? getInfo(goals) : null
  if (result) {
    datas = result.data
    labeles = result.label

  }

  const data = {
    labels: labeles,
    datasets: [
      {
        label: "# of Votes",
        data: datas,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold"></h6>
              <h2 className="text-white text-xl font-semibold"></h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <Pie data={data} />
          </div>
        </div>
      </div>
    </>
  );
}

export default PieChart;
