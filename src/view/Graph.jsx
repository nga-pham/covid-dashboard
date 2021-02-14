import Paper from "@material-ui/core/Paper";
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
  SplineSeries,
} from "@devexpress/dx-react-chart-material-ui";
let data = require("../model/data.json")


export default function Graph() {
  const getTotalCases = (cases) => {
    const total_cases_list = [];
    cases.forEach((item) =>
      total_cases_list.push({
        splineValue: item,
        argument: cases.indexOf(item) + 1,
      })
    );
    return total_cases_list;
  }
    return (
      <Paper>
        <Chart
          data={getTotalCases(data[0]["cases"])}
        >
          <ArgumentAxis />
          <ValueAxis />

          <LineSeries
            name="line"
            valueField="lineValue"
            argumentField="argument"
          />
          <SplineSeries
            name="spline"
            valueField="splineValue"
            argumentField="argument"
          />
        </Chart>
      </Paper>
    );
}