import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import chartData from "./chartData";

const chartOptions = {
  elements: {
    line: {
      tension: 1,
      borderWidth: 2,
    },
    point: {
      pointStyle: "line",
      radius: 0,
      borderWidth: 5,
      hitRadius: 0,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
      align: "start",
    },
    tooltip: {
      position: "nearest",
      mode: "index",
      intersect: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        autoSkip: true,
        maxTicksLimit: 20,
        callback: function (val, index, ticks) {
          return this.getLabelForValue(val);
        },
      },
    },
    y: {
      ticks: {
        callback: function (value) {
          return value + "%";
        },
      },
    },
  },
};

function PerfChart() {
  return <Line data={chartData} options={chartOptions} />;
}

export default PerfChart;
