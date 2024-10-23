export const data = {
	labels: [
		'Q1 2021',
		'Q2 2021',
		'Q3 2021',
		'Q4 2021',
		'Q1 2022',
		'Q2 2022',
		'Q3 2022',
		'Q4 2022',
		'Q1 2023',
		'Q2 2023',
		'Q3 2023',
		'Q4 2023',
		'Q1 2024',
	],
	datasets: [
		{
			label: 'Meta',
			data: [10, 15, 20, 25, 30, 35, 40, 50, 55, 65, 70, 75, 87],
			borderColor: '#00BFFF',
			backgroundColor: '#00BFFF',
			pointBackgroundColor: '#00BFFF',
			pointRadius: 2,
			borderWidth: 2,
			fill: false,
		},
		{
			label: 'Tesla',
			data: [5, 7, 8, 10, 12, 14, 17, 19, 20, 25, 30, 35, 54],
			borderColor: '#ADD8E6',
			pointBackgroundColor: '#ADD8E6',
			backgroundColor: '#ADD8E6',

			pointRadius: 2,
			borderWidth: 2,
			fill: false,
		},
		{
			label: 'Nvidia',
			data: [3, 4, 7, 8, 9, 12, 14, 16, 18, 20, 22, 25, 30],
			borderColor: '#1E90FF',
			pointBackgroundColor: '#1E90FF',
			backgroundColor: '#1E90FF',

			pointRadius: 2,
			borderWidth: 2,
			fill: false,
		},
		{
			label: 'Microsoft',
			data: [7, 9, 12, 15, 18, 20, 25, 30, 35, 40, 45, 50, 60],
			borderColor: '#6495ED',
			backgroundColor: '#6495ED',
			pointBackgroundColor: '#6495ED',
			pointRadius: 2,
			borderWidth: 2,
			fill: false,
		},
		{
			label: 'Apple',
			data: [5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20],
			borderColor: '#7B68EE',
			backgroundColor: '#7B68EE',

			pointBackgroundColor: '#7B68EE',
			pointRadius: 2,
			borderWidth: 2,
			fill: false,
		},
		{
			label: 'Google',
			data: [6, 8, 9, 12, 14, 16, 18, 20, 22, 25, 27, 30, 33],
			borderColor: '#4169E1',
			backgroundColor: '#4169E1',

			pointBackgroundColor: '#4169E1',
			pointRadius: 2,
			borderWidth: 2,
			fill: false,
		},
		{
			label: 'Amazon',
			data: [7, 10, 12, 15, 18, 20, 22, 24, 26, 28, 30, 32, 35],
			borderColor: '#4682B4',
			backgroundColor: '#4682B4',

			pointBackgroundColor: '#4682B4',
			pointRadius: 2,
			borderWidth: 2,
			fill: false,
		},
	],
};

export const options = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: true,
			position: 'right',
			labels: {
				color: 'white',
				font: {
					size: 12,
				},
			},
		},
		title: {
			display: true,
			text: 'Revenue last 3 years',
			color: 'white',
			font: {
				size: 18,
			},
		},
	},
	scales: {
		x: {
			ticks: {
				color: 'white',
				font: {
					size: 10,
				},
			},
			grid: {
				color: '#3e3e3e',
				display: true,
			},
		},
		y: {
			ticks: {
				color: 'white',
				font: {
					size: 10,
				},
			},
			grid: {
				color: '#3e3e3e',
			},
		},
	},
};
