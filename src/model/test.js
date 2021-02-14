let data = require("./data.json")

const getTotalCases = (cases) => {
    const total_cases_list = []
    cases.forEach((item) => total_cases_list.push(
      {
        splineValue: item,
        argument: cases.indexOf(item),
      }
    ))
    return total_cases_list;
  }
  
console.log(getTotalCases(data[0]["cases"]))