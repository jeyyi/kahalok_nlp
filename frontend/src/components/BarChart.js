// src/components/PieChart.js
import React from "react";
import { Bar } from "react-chartjs-2";

function BarChart({ chartData }) {
  return (
    <div className="chart-container min-h-full min-w-full">
      <Bar
        data={chartData}
        options={{
          indexAxis: 'y',
          maintainAspectRatio: false,
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
export default BarChart;