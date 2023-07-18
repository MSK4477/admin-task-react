import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      display: true
    },
    title: {
      display: false
    }
  },
  cutoutPercentage: 100
};

export const data = {
  labels: ["Direct",   "Referal", "Social"],
  datasets: [
    {
      data: [55,30,15],
      backgroundColor: [ "#4e73df", "#1cc88a", "#36b9cc"],
      borderWidth: 8
    }
  ]
};

function DoughnutChart() {
  return <Doughnut options={options} data={data} />;
}


export default DoughnutChart;
