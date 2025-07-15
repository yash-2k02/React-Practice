import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart(props) {

  const filteredDataByYear = props.data;
  // console.log("Hii from chart");
  // console.log(filteredDataByYear);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthlyEvents = months.map((month) => {
    const count = filteredDataByYear.filter(
      (data) => data.date.toLocaleString("default", { month: "short" }) == month
    ).length;
    return { month: month, count: count };
  });
  // console.log("Monthly event obj");
  // console.log(monthlyEvents);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={400}
        data={monthlyEvents}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="month"
          label={{
            value: "Months",
            position: "insideBottom",
            offset: -5
          }}
        />
        <YAxis
          dataKey="count"
          label={{
            value: "Count",
            angle: -90, 
            position: "insideLeft",
            offset: 0
          }}
        />

        <Tooltip />
        <Bar
          dataKey="count"
          fill="#5A827E"
          activeBar={<Rectangle fill="#b0ded9" stroke="blue" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
