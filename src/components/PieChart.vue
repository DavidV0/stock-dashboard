<template>
	<div class="pie-chart-container">
		<Pie :data="data" :options="options" />
		<p class="label-text">In Billion USD TTM</p>
	</div>
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'vue-chartjs';
import * as chartConfig from './configs/pieChartConfig.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
	name: 'PieChart',
	components: {
		Pie,
	},
	data() {
		return chartConfig;
	},
};
</script>

<style scoped>
.pie-chart-container {
	width: 97%;
	height: 400px;
	background-color: #011f35;
	border-radius: 16px;
	position: relative;
}

.label-text {
	position: absolute;
	bottom: 10px;
	right: 40px;
	color: #ccc;
	font-size: 8px;
}
</style>
