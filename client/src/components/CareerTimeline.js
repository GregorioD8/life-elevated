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

// Register required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const CareerTimeline = () => {
  const data = {
    labels: [
      'Phoenix Fire Department',
      'Avondale Fire Chief',
      'Mesa Community College',
      'Texas A&M Instructor',
      'Performance Specialist',
    ],
    datasets: [
      {
        label: 'Years of Service',
        data: [33, 5, 20, 10, 4],
        backgroundColor: ['#00509E', '#57A0D3', '#A9D6E5', '#74C69D', '#40916C'], // Muted tones
        hoverBackgroundColor: ['#003F73', '#4B93BA', '#92C8D8', '#66B48D', '#387F58'], // Hover colors
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14, // Adjust font size
          },
          color: '#333', // Adjust font color
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) =>
            `${tooltipItem.label}: ${tooltipItem.raw} years`,
        },
      },
    },
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Career Positions',
          font: {
            size: 16,
          },
          color: '#333',
        },
        grid: {
          display: false, // Hide grid lines
        },
      },
      y: {
        title: {
          display: true,
          text: 'Years of Service',
          font: {
            size: 16,
          },
          color: '#333',
        },
        beginAtZero: true,
        grid: {
          color: '#ccc', // Subtle grid color
        },
      },
    },
  };

  return (
    <div style={{ padding: '20px', background: '#f9f9f9', borderRadius: '10px' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default CareerTimeline;