export const data = {
	labels: ['Meta', 'Tesla', 'Nvidia', 'Microsoft', 'Apple', 'Google', 'Amazon'],
	datasets: [
		{
			data: [8.7, 5.4, 14.7, 17, 17.7, 11.5, 9.1],
			backgroundColor: [
				'#00BFFF',
				'#ADD8E6',
				'#1E90FF',
				'#6495ED',
				'#7B68EE',
				'#4169E1',
				'#4682B4',
			],
			borderColor: '#011f35',
			borderWidth: 2,
			hoverOffset: 4,
		},
	],
};

export const options = {
	responsive: true,
	maintainAspectRatio: false,
	cutout: '70%',
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
			text: 'Revenue Breakdown Magnificent Seven',
			color: 'white',
			font: {
				size: 18,
			},
		},
	},
};
