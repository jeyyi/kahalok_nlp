// src/components/PieChart.js
import React from "react";
import { Doughnut, Bar } from "react-chartjs-2";

function PieChart({ chartData }) {
  return (
    <div className="chart-container min-h-full min-w-full">
      <Doughnut
        data={chartData}
        options={{
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: false,
              text: "Sample Pie Chart"
            },
            legend: {
                display: false,
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