<template>
	<section>
		<div class="chart-container">
			<Bar :data="dataNetIncome" :options="optionsNetIncome" />
			<Bar :data="dataGrossMargin" :options="optionsGrossMargin" />
			<Bar :data="dataRevenueGrowth" :options="optionsRevenueGrowth" />
		</div>
	</section>
</template>

<script>
import { Bar } from 'vue-chartjs';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';

import { dataNetIncome, optionsNetIncome } from './configs/netIncomeConfig.js';
import {
	dataGrossMargin,
	optionsGrossMargin,
} from './configs/grossMarginConfig.js';
import {
	dataRevenueGrowth,
	optionsRevenueGrowth,
} from './configs/revenueGrowthConfig.js';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export default {
	name: 'BarCharts',
	components: {
		Bar,
	},
	data() {
		return {
			dataNetIncome,
			optionsNetIncome,
			dataGrossMargin,
			optionsGrossMargin,
			dataRevenueGrowth,
			optionsRevenueGrowth,
		};
	},
};
</script>

<style scoped>
section {
	width: 100vw;
	display: flex;
	align-items: center;
}
.chart-container {
	max-width: 1440px !important;
	display: flex;
	max-height: 350px;
	justify-content: space-between;
	gap: 20px;
	height: auto;
	margin-top: 20px;
}

canvas {
	width: 32% !important;
	border-radius: 16px;
	background-color: #011f35;
	padding: 20px;
}

@media (max-width: 1000px) {
	.chart-container {
		flex-direction: column;
		align-items: center;
		width: 100vw;
		padding: 0;
		margin-top: 20px;
	}

	canvas {
		width: 97% !important;
		padding: 0;
	}
}
</style>
