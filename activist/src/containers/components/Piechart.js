import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";

const foodCount = Number(localStorage.getItem("foodCount"));
const householdCount = Number(localStorage.getItem("householdCount"));
const transportationCount = Number(localStorage.getItem("transportCount"));
const shoppingCount = Number(localStorage.getItem("shoppingCount"));
const totalCount =
  foodCount + householdCount + transportationCount + shoppingCount;

const Charts = () => {
  const [chartData, setChartData] = useState({});
  const chart = () => {
    setChartData({
      labels: [
        "shopping: " + ((shoppingCount / totalCount) * 100).toFixed(2) + "%",
        "food: " + ((foodCount / totalCount) * 100).toFixed(2) + "%",
        "transport: " +
          ((transportationCount / totalCount) * 100).toFixed(2) +
          "%",
        "household: " + ((householdCount / totalCount) * 100).toFixed(2) + "%",
      ],
      datasets: [
        {
          fontSize: "200%",
          label: "amount saved",
          data: [shoppingCount, foodCount, transportationCount, householdCount],
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
    <div className="pie">
      <Pie data={chartData} height={"250%"} />
    </div>
  );
};
export default Charts;
