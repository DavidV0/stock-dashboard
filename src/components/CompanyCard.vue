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
				<p class="company-absolute-change" :class="absoluteChangeClass">
					<span>{{ absoluteChange }}</span>
					<span :class="positive ? 'arrow-up' : 'arrow-down'"></span>
				</p>
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
		absoluteChangeClass() {
			return this.positive ? 'positive' : 'negative';
		},
	},
};
</script>

<style scoped>
.company-card {
	background-color: #011f35;
	border-radius: 16px;
	padding: 20px;
	color: white;
	width: 180px;
	margin: 10px;
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
	font-weight: bold;
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
}

.company-change,
.company-absolute-change {
	margin: 0;
	font-size: 14px;
}

.positive {
	color: green;
}

.negative {
	color: red;
}

.company-unit {
	margin: 0;
	font-size: 12px;
	color: #ccc;
}

/* CSS for the arrows */
.arrow-up::before {
	content: '▲';
	color: green;
	margin-left: 5px;
}

.arrow-down::before {
	content: '▼';
	color: red;
	margin-left: 5px;
}
</style>
