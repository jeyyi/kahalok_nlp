import React from 'react'
import { Scatter } from 'react-chartjs-2'

const ScatterChart = ({chartData}) => {
  return (
    <div className="chart-container min-h-full min-w-full">
      <Scatter
        data={chartData}
        options={{
          maintainAspectRatio: false,
          scales : {
            x: {
              type: 'linear',
              position: 'bottom'
            }
          }
        }}
      />
    </div>
  )
}

export default ScatterChart