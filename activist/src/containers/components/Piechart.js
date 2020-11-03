import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";

const Charts = () => {
  const [chartData, setChartData] = useState({});
  const chart = () => {
    setChartData({
      labels: ["shopping", "food", "transport", "household"],
      datasets: [
        {
          label: "amount saved",
          data: [100, 200, 300, 400],
          backgroundColor: [
            "rgba(75,192,192,0.1)",
            "rgba(75,192,192,0.3)",
            "rgba(75,192,192,0.5)",
            "rgba(75,192,192,0.7)",
          ],
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div className="chart">
      <Pie data={chartData} />
    </div>
  );
};
export default Charts;
