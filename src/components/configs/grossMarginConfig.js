export const dataGrossMargin = {
	labels: [
		'Nvidia',
		'Meta',
		'Amazon',
		'Microsoft',
		'Alphabet',
		'Apple',
		'Tesla',
	],
	datasets: [
		{
			label: 'Gross Margin in % LQ',
			data: [24.8, 24.3, 12.7, 12.5, 12.2, 6.2, 5.7],
			backgroundColor: '#ADD8E6', // Light blue color
			borderColor: '#ADD8E6',
			borderWidth: 1,
			barThickness: 10,
		},
	],
};

export const optionsGrossMargin = {
	responsive: true,
	indexAxis: 'y', // Horizontal bar chart
	plugins: {
		legend: {
			display: false,
		},
		title: {
			display: true,
			text: 'Gross Margin in % LQ',
			color: 'white',
		},
	},
	scales: {
		x: {
			ticks: {
				color: 'white',
			},
			grid: {
				color: '#3e3e3e',
			},
		},
		y: {
			ticks: {
				color: 'white',
			},
			grid: {
				display: false,
			},
		},
	},
};
