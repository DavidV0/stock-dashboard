<template>
	<section>
		<div class="cards-container">
			<CompanyCard
				name="Apple"
				:logo="require('@/assets/apple-logo.png')"
				revenue="38.52"
				change="+2.83%"
				:positive="true"
				quarter="Revenue Q1 2024"
				absoluteChange="+1.06"
				unit="in Bill USD"
			/>
			<CompanyCard
				name="Meta"
				:logo="require('@/assets/meta-logo.png')"
				revenue="435.57"
				change="-1.32%"
				:positive="false"
				quarter="Revenue Q1 2024"
				absoluteChange="-5.81"
				unit="in Bill USD"
			/>
			<CompanyCard
				name="Microsoft"
				:logo="require('@/assets/microsoft-logo.png')"
				revenue="409.05"
				change="+2.51%"
				:positive="true"
				quarter="Revenue Q1 2024"
				absoluteChange="+1.70"
				unit="in Bill USD"
			/>
			<CompanyCard
				name="Google"
				:logo="require('@/assets/google-logo.png')"
				revenue="29.87"
				change="+6.04%"
				:positive="true"
				quarter="Revenue Q1 2024"
				absoluteChange="+1.70"
				unit="in Bill USD"
			/>
			<CompanyCard
				name="Amazon"
				:logo="require('@/assets/amazon-logo.png')"
				revenue="117.89"
				change="+2.43%"
				:positive="true"
				quarter="Revenue Q1 2024"
				absoluteChange="+4.22"
				unit="in Bill USD"
			/>
			<CompanyCard
				name="Tesla"
				:logo="require('@/assets/tesla-logo.png')"
				revenue="177.89"
				change="+2.43%"
				:positive="true"
				quarter="Revenue Q1 2024"
				absoluteChange="+4.22"
				unit="in Bill USD"
			/>
			<CompanyCard
				name="Nvidia"
				:logo="require('@/assets/nvidia-logo.svg')"
				revenue="71.92"
				change="-13.2%"
				:positive="false"
				quarter="Revenue Q1 2024"
				absoluteChange="-2.50"
				unit="in Bill USD"
			/>
		</div>
	</section>
</template>

<script>
import CompanyCard from './CompanyCard.vue';

export default {
	components: {
		CompanyCard,
	},
};
</script>

<style scoped>
section {
	width: 100vw;
	display: flex;
	align-items: center;
}
.cards-container {
	display: flex;
	max-width: 1440px;
	flex-wrap: wrap;
	justify-content: center;
	background-color: #023a6233;
	padding: 20px;
	gap: 20px;
	margin-bottom: 20px;
	border-radius: 16px;
}
</style>
