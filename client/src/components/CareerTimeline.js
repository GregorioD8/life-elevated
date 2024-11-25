import React from 'react';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register required components and plugins
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, ChartDataLabels);

const CareerTimeline = () => {
  const data = {
    labels: [
      'Phoenix Fire Department',
      'Avondale Fire Chief',
      'Teaching Roles',
      'Performance Specialist',
    ],
    datasets: [
      {
        label: 'Years of Service',
        data: [33, 5, 20, 4],
        backgroundColor: '#00509E', // Solid blue color
        hoverBackgroundColor: '#003F7D', // Darker blue on hover
        borderRadius: 10, // Rounded bars for modern look
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow custom size
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: false, // Disable tooltips for a cleaner look
      },
      datalabels: {
        display: true,
        align: 'end',
        anchor: 'end',
        color: '#FFFFFF', // White color for visibility
        font: {
          size: 16, // Larger font for data labels
          weight: 'bold',
        },
        formatter: (value) => `${value} yrs`,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          drawOnChartArea: false, // Hide grid lines for a floating effect
        },
        title: {
          display: true,
          text: 'Years of Service',
          font: {
            size: 16, // Larger font size for the title
          },
          color: '#333',
        },
        ticks: {
          font: {
            size: 14, // Larger font size for x-axis ticks
          },
        },
      },
      y: {
        type: 'category',
        grid: {
          display: false, // Remove horizontal grid lines
        },
        ticks: {
          font: {
            size: 20, // Increase font size for y-axis labels
            weight: 'bold', // Make the labels bold for better visibility
          },
          color: '#FFFFFF', // White color for labels
        },
      },
    },
    indexAxis: 'y', // Horizontal bars
  };

  const chartStyle = {
    padding: '20px',
    background: 'transparent', // Fully transparent background
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow for floating effect
  };

  return (
    <div style={chartStyle}>
      <Bar data={data} options={options} width={600} height={400} />
    </div>
  );
};

export default CareerTimeline;