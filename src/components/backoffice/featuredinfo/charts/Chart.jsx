import "./chart.css";
import { PieChart, Pie, Tooltip } from "recharts";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
const Chart = () => {
  const data = [
    { name: "January", value: 12889 },
    { name: "Feb", value: 20000 },
    { name: "March", value: 34531 },
    { name: "April", value: 54520 },
    { name: "May", value: 23210 },
    { name: "June", value: 63450 },
    { name: "July", value: 45000 },
    { name: "August", value: 85000 },
    { name: "September", value: 50000 },
    { name: "October", value: 95000 },
    { name: "November", value: 99000 },
    { name: "December", value: 120000 },
  ];
  return (
    <div className="chart">
      <div className="chartcontainer">
        <h3 className="chartTitle">user analysis</h3>
        <PieChart width={600} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={data}
            cx="30%"
            cy="50%"
            outerRadius={80}
            fill="#4884d8"
            label
          />

          <Tooltip />
        </PieChart>
      </div>
      <div className="chartcontainer">
        <h3 className="chartTitle">Sales Statistics</h3>
        <div className="graphs">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 60,
              right: 50,
              left: 0,
              bottom: 0.5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" stackId="a" fill="#1884d8" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Chart;
