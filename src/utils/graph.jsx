import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const labl = 'Выучено слов за день';
const color = '255, 99, 132';

const dat = [1, 2, 3];

const currentHour = new Date().getHours();

console.log(currentHour);

// {
// 00: 10, 01: 20
// }

const labels = [currentHour, ...(Array(24 - currentHour).fill(0)).map((_, ind) => currentHour + ind + 1)].map((item) => `${item}-00`);

const newWordsCount = new Map([labels, Array(24 - currentHour).fill(0)]);

console.log(newWordsCount);

const Graph = () => {
  const chartRef = useRef(null);

  const data = {
    labels: labels,
    datasets: [{
      label: labl,
      backgroundColor: `rgba(${color}, 0.5)`,
      borderColor: `rgb(${color})`,
      data: dat,
    }]
  };

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

  const config = {
    type: 'line',
    data,
    options: {}
  };

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");

    const myChart = new Chart(myChartRef, {
      type: 'scatter',
      data: {
        datasets: [{
          label: 'Scatter Dataset',
          data: [{
            x: -10,
            y: 0
          }, {
            x: 0,
            y: 10
          }, {
            x: 10,
            y: 5
          }, {
            x: 0.5,
            y: 5.5
          }],
          backgroundColor: 'rgb(255, 99, 132)'
        }]
      },
      options: {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom'
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

// export default class LineGraph extends React.Component {
//   constructor() {
//     super();
//     this.chartRef = React.createRef();
//     this.myLineChart = undefined;
//   }

//   componentDidMount() {
//     this.buildChart();
//   }

//   componentDidUpdate() {
//     this.buildChart();
//   }

//   buildChart() {
//     const myChartRef = this.chartRef.current.getContext("2d");
//     // const { data, average, labels } = this.props;

//     if (typeof this.myLineChart !== "undefined") {
//       this.myLineChart.destroy();
//     }

//     this.myLineChart = new Chart(myChartRef, {
//       type: 'line',
//       data: {
//         labels: labels,
//         datasets: [{
//           label: 'My First dataset',
//           backgroundColor: 'rgb(255, 99, 132)',
//           borderColor: 'rgb(255, 99, 132)',
//           data: [0, 10, 5, 2, 20, 30, 45],
//         }]
//       },
//       options: {},
//     });
//   }

//   render() {
//     return (
//       <div className="graph__container">
//         <canvas
//           id="myChart"
//           ref={this.chartRef}
//         />
//       </div>
//     );
//   }
// }
