<template>
	<div class="line-chart-container">
		<Line :data="data" :options="options" />
	</div>
</template>

<script>
import { Line } from 'vue-chartjs';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import * as chartConfig from './configs/lineChartConfig.js';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export default {
	name: 'LineChart',
	components: {
		Line,
	},
	data() {
		return chartConfig;
	},
};
</script>

<style scoped>
.line-chart-container {
	width: 100%;
	height: 400px;
	background-color: #011f35;
	border-radius: 16px;
	padding: 20px;
}
</style>
