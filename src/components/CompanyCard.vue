<template>
	<div class="company-card">
		<div class="company-header">
			<img :src="logo" alt="company logo" class="company-logo" />
			<span class="company-name">{{ name }}</span>
		</div>
		<p class="company-quarter">{{ quarter }}</p>
		<div class="changes">
			<p class="company-revenue">{{ revenue }}</p>
			<div class="changes-right">
				<p class="company-absolute-change">{{ absoluteChange }}</p>
				<p class="company-change" :class="changeClass">{{ change }}</p>
			</div>
		</div>
		<p class="company-unit">{{ unit }}</p>
	</div>
</template>

<script>
export default {
	props: {
		name: String,
		logo: String,
		revenue: String,
		change: String,
		absoluteChange: String,
		positive: Boolean,
		quarter: String,
		unit: String,
	},
	computed: {
		changeClass() {
			return this.positive ? 'positive' : 'negative';
		},
	},
};
</script>

<style scoped>
.company-card {
	display: flex;
	align-items: start;
	justify-content: center;
	flex-direction: column;
	background-color: #011f35;
	border-radius: 16px;
	padding: 20px 24px 20px 24px !important;
	color: white;
	width: 180px;
	gap: 8px;
}

.company-header {
	display: flex;
	align-items: center;
}

.company-logo {
	width: 20px;
	height: 20px;
	margin-right: 10px;
}

.company-name {
	font-size: 20px;
}

.company-quarter {
	margin: 5px 0;
	font-size: 12px;
	color: #ccc;
}

.changes {
	display: flex;
	align-items: center;
	gap: 10px;
}

.changes-right {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.company-revenue {
	font-size: 24px;
	font-weight: bold;
	margin: 0px;
}

.company-change {
	margin: 0px;
}

.company-absolute-change {
	margin: 0px;

	font-size: 14px;
	color: #ccc;
}

.positive {
	color: green;
}

.negative {
	color: red;
}

.company-unit {
	margin: 0px;
	font-size: 8px;
	color: #ccc;
}
</style>
