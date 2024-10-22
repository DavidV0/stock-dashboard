<template>
	<div class="card">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'BaseCard',
};
</script>

<style scoped>
.card {
	background-color: #011f35;
	border-radius: 16px;
	padding: 20px 32px;
}
</style>
