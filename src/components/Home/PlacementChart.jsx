import React from 'react'

//-------------ChartJS Specific Stuff
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, ArcElement, Tooltip, Legend } from 'chart.js';

import { Line } from 'react-chartjs-2'

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, ArcElement, Tooltip, Legend)

// --------------- A line chart, is help we show how many subscribe or un subscribe users 
export const LineChart = ({ placements = ['23','12','20','17','1','9','40','21'],labels }) => {



    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            },
            title: {
                display: true,
                text: "Placements Per Year"
            }
        }
    }

    const data = {
        labels,
        datasets: [{
            label: "placements",
            data: placements,
            borderColor: '#1976d2',
            backgroundColor: 'rgba(25, 118, 210, 0.5)',
            // backgroundColor: '#5c5151'
        }]
    };

    return <Line options={options} data={data} />
}
