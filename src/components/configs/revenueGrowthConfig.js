export const dataRevenueGrowth = {
	labels: [
		'Apple',
		'Microsoft',
		'Amazon',
		'Alphabet',
		'Meta',
		'Tesla',
		'Nvidia',
	],
	datasets: [
		{
			label: 'Q1 2024',
			data: [10, 20, 80, 40, 30, 10, 5],
			backgroundColor: '#00BFFF',
		},
		{
			label: 'Q4 2023',
			data: [15, 25, 75, 45, 35, 15, 7],
			backgroundColor: '#ADD8E6',
		},
		{
			label: 'Q3 2023',
			data: [20, 30, 70, 50, 40, 20, 10],
			backgroundColor: '#1E90FF',
		},
		{
			label: 'Q2 2023',
			data: [25, 35, 65, 55, 45, 25, 12],
			backgroundColor: '#6495ED',
		},
	],
};

export const optionsRevenueGrowth = {
	responsive: true,
	plugins: {
		legend: {
			display: true,
			labels: {
				color: 'white',
			},
		},
		title: {
			display: true,
			text: 'Revenue Growth in % YoY',
			color: 'white',
		},
	},
	scales: {
		x: {
			ticks: {
				color: 'white',
			},
			grid: {
				display: false,
			},
		},
		y: {
			ticks: {
				color: 'white',
			},
			grid: {
				color: '#3e3e3e',
			},
		},
	},
};
