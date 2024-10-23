<template>
	<div class="chart-container">
		<Bar :data="dataNetIncome" :options="optionsNetIncome" />
		<Bar :data="dataGrossMargin" :options="optionsGrossMargin" />
		<Bar :data="dataRevenueGrowth" :options="optionsRevenueGrowth" />
	</div>
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
.chart-container {
	display: flex;
	justify-content: space-between;
	padding: 20px;
	gap: 20px;
	max-width: 100vw;
	height: auto;
}

.chart-container > * {
	flex: 1 1 32%;
	max-width: 32%;
	max-height: 300px;
}

canvas {
	border-radius: 16px;
	background-color: #011f35;
	padding: 20px;
}
</style>
