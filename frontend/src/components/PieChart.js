// src/components/PieChart.js
import { Legend } from "chart.js";
import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ chartData }) {
  return (
    <div className="chart-container min-h-full min-w-full">
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
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