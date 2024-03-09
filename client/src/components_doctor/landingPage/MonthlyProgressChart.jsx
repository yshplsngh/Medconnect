import React from 'react';
import ReactApexChart from 'react-apexcharts';

const MonthlyProgressChart = () => {
  const chartOptions = {
    chart: {
      type: 'line',
      height: '150',
      zoom: {
        enabled: false, // Disable zoom
      },
      toolbar: {
        show: false, // Disable the toolbar (includes zoom and pan)
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    },
    series: [
      {
        name: 'Monthly Progress',
        data: [30, 40, 35, 50, 49, 60, 70],
      },
    ],
    colors: ['#007BFF'],
    stroke: {
      width: 2,
    },
    markers: {
      size: 6,
    },
    grid: {
      show: false,
    },
    tooltip: {
      theme: 'dark',
    },
  };

  const chartStyle = {
    backgroundColor: '#F7FAFC',
    padding: '1rem',
    borderRadius: '0.5rem',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={chartStyle} className="rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Monthly Progress</h2>
      <ReactApexChart options={chartOptions} series={chartOptions.series} type="line" height={150} />
    </div>
  );
};

export default MonthlyProgressChart;