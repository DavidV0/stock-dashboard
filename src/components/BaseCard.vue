<template>
	<div class="card">
		<h2>{{ companyName }}</h2>
		<p>Revenue: {{ revenue }} USD</p>
		<p>Change: {{ change }}%</p>
	</div>
</template>

<script>
export default {
	props: ['companyName', 'revenue', 'change'],
};
</script>

<style scoped>
.card {
	background-color: #011f35;
	border-radius: 16px;
	padding: 20px 32px;
	color: white;
}
</style>
