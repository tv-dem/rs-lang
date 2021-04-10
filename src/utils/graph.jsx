import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const Graph = ({ statType, graphType, data, color }) => {
  const chartRef = useRef(null);

  // const data = {
  //   labels: labels,
  //   datasets: [{
  //     label: labl,
  //     backgroundColor: `rgba(${color}, 0.5)`,
  //     borderColor: `rgb(${color})`,
  //     data: dat,
  //   }]
  // };

  const chartOptions = {
    legend: {
      display: true,
      position: 'top',
      labels: {
        boxWidth: 80,
        fontColor: 'rgb(189, 189, 189)',
      },
    },
    tooltips: {
      intersect: true,
      backgroundColor: 'rgba(255, 255, 255, .9)',
      titleFontColor: 'rgb(0, 0, 0)',
      titleAlign: 'center',
      bodyFontColor: 'rgb(0, 0, 0)',
      yPadding: 2,
      caretPadding: 10,
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 1,
    },
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        gridLines: {
          color: '#9e9e9e',
          borderDash: [2, 5],
        },
        ticks: {
          beginAtZero: true,
          fontColor: '#9e9e9e',
        },
      }],
      xAxes: [{
        type: 'time',
        bounds: 'ticks',
        // distribution: 'timeseries',
        gridLines: {
          color: '#9e9e9e',
          borderDash: [2, 5],
          offsetGridLines: true,
        },
        time: {
          unit: 'day',
          unitStepSize: 1,
          tooltipFormat: 'MM-DD-YYYY',
          displayFormats: {
            day: 'MM-DD',
          },
        },
        ticks: {
          min: 0,
          max: 30,
          fontColor: '#9e9e9e',
        },
        scaleLabel: {
          display: false,
          labelString: 'Time in Days',
          fontColor: 'red',
        },
      }],
    },
  };

  // const config = {
  //   type: 'line',
  //   data,
  //   options: {}
  // };

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
        stepped: true,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Время вашего занятия:'
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Выучено слов:'
            }
          }
        }
      }
    });

    return () => myChart.destroy();
  }, []);

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
