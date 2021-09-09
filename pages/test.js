export default function test() {
  return <h1>Hello world</h1>;
}

const goals = [
  {
    id: 21,
    name: "teste",
    description: "test",
    endDate: "2021-09-02",
    need: 4,
  },
  {
    id: 22,
    name: "goal2",
    description: "asd",
    endDate: "2012-01-01",
    need: 4,
  },
];

// Log an object.
console.log(goals);

function getInfo(goals) {
  var result = { label: [], data: [] };
  goals.forEach((goal, index) => {
    var count = 0
    if (!result.label.includes(goal.need)) {
        goals.forEach((goa, ind) => {
            
            if (goal.need ===    goa.need) {
              count++
            }
          });
        result.label.push(goal.need)
        result.data.push(count)
    }

  });

  return result;
}

console.log(getInfo(goals));
