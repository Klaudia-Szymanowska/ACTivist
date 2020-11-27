import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const Charts = () => {
  const [chartData, setChartData] = useState({});
  const chart = () => {
    setChartData({
      labels: ["no beef", "pescatarian", "vegetarian", "vegan"],
      datasets: [
        {
          label: "amount of CO2 saved",
          data: [100, 200, 300, 400],
          backgroundColor: ["rgba(75,192,192,0.4)"],
          borderWidth: 10,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div className="chart">
      <Line data={chartData} />
    </div>
  );
};
export default Charts;
