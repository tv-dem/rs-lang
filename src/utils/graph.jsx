import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const Graph = ({ statType, graphType, data, color, isStepped = false }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");

    const myChart = new Chart(myChartRef, {
      type: graphType,
      data: {
        datasets: [{
          label: statType,
          data: data,
          backgroundColor: `rgba(${color}, 0.5)`,
          borderColor: `rgb(${color})`,
        }]
      },
      options: {
        responsive: true,
        interaction: {
          intersect: false,
          axis: 'x'
        },
        stepped: isStepped,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: (graphType === 'line') ? 'Время вашего занятия:' : ''
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: (graphType === 'line') ? 'Выучено слов:' : 'Сыграно раз:'
            }
          }
        }
      }
    });

    return () => myChart.destroy();
  }, [statType, graphType, data, color, isStepped]);

  return (
    <div className="graph__container">
      <canvas
        id="myChart"
        ref={chartRef}
      />
    </div>
  );
};

export default Graph;
