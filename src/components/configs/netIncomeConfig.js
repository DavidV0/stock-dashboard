export const dataNetIncome = {
	labels: [
		'Amazon',
		'Meta',
		'Alphabet',
		'Microsoft',
		'Apple',
		'Nvidia',
		'Tesla',
	],
	datasets: [
		{
			label: 'Net Income TTM',
			data: [62.62, 40.15, 37.5, 24.51, 26.25, 6.81, 3.16],
			backgroundColor: '#00BFFF',
			borderColor: '#00BFFF',
			borderWidth: 1,
			barThickness: 20,
		},
	],
};

export const optionsNetIncome = {
	responsive: true,
	indexAxis: 'y',
	plugins: {
		legend: {
			display: false,
		},
		title: {
			display: true,
			text: 'Net Income TTM',
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
