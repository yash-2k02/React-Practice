import { PieChart, Pie, Tooltip, Legend, LabelList } from "recharts";
import "./Piechart.css";

export default function Piechart(props) {
  const filteredDataByYear = props.data;

  const categories = ["Health", "Environment", "Social"];

  const yearlyCategoryEvents = categories.map((category) => {
    const count = filteredDataByYear.filter(
      (data) => data.category == category
    ).length;
    return { category: category, count: count };
  });
  console.log("Filtered data insdie piechart: ", filteredDataByYear);
  console.log("INside piechart");
  console.log("Year:", filteredDataByYear.date);
  console.log("Yearly event count obj");
  console.log(yearlyCategoryEvents);

  

  return (
    <PieChart width={600} height={400}>
      <Pie
        data={yearlyCategoryEvents}
        dataKey="count"
        cx={300}
        cy={200}
        outerRadius={150}
        fill="#5A827E"
        label={({ cx, cy, midAngle, innerRadius, outerRadius, index }) => {
          const RADIAN = Math.PI / 180;
          const radius = 25 + outerRadius;
          const x = cx + radius * Math.cos(-midAngle * RADIAN);
          const y = cy + radius * Math.sin(-midAngle * RADIAN);

          const category = yearlyCategoryEvents[index].category;
          const count = yearlyCategoryEvents[index].count;

          return (
            <text
              x={x}
              y={y}
              fill="black"
              textAnchor={x > cx ? "start" : "end"}
              dominantBaseline="central"
              fontSize={16}
            >
              {`${category}: ${count}`}
            </text>
          );
        }}
      />

      <Tooltip />
    </PieChart>
  );
}
