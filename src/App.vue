<template>
	<AppHeader />
	<CompanyCardsContainer />
	<div class="revenue">
		<LineChart />
		<PieChart />
	</div>
	<BarChart />
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import CompanyCardsContainer from './components/CompanyCardsContainer.vue';
import LineChart from './components/LineChart.vue';
import PieChart from './components/PieChart.vue';
import BarChart from './components/BarCharts.vue';

export default {
	name: 'App',
	components: {
		AppHeader,
		CompanyCardsContainer,
		LineChart,
		PieChart,
		BarChart,
	},
};
</script>

<style>
body {
	margin: 0;
	background-color: black;
	display: flex;
	align-items: center;
	justify-content: center;
}
#app {
	padding: 0;
	margin: 0;

	width: 100vw;
	height: 100vh;
	max-width: 1440px;
	box-sizing: border-box;
}

.revenue {
	display: flex;
	gap: 20px;
}

@media (max-width: 1420px) {
	.revenue {
		flex-direction: column;
		align-items: center;
		width: 100vw;
	}
}

@media (max-width: 420px) {
	.revenue {
		flex-direction: column;
		align-items: center;
		margin: 0;
	}
}
</style>
