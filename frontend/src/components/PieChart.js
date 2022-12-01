// src/components/PieChart.js
import React from "react";
import { Doughnut } from "react-chartjs-2";

function PieChart({ chartData }) {
  return (
    <div className="chart-container min-h-full min-w-full">
      <Doughnut
        data={chartData}
        options={{
          plugins: {
            title: {
              display: false,
              text: "Sample Pie Chart"
            },
            legend: {
                display: true,
                labels : {
                    usePointStyle: false,
                }
            }
          }
        }}
      />
    </div>
  );
}
export default PieChart;