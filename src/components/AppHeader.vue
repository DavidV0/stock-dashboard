<template>
	<header class="header">
		<div class="header-line"></div>
		<h1>The Magnificent Seven Companies</h1>
	</header>
</template>

<script>
export default {
	name: 'AppHeader',
};
</script>

<style scoped>
.header {
	background-color: #020204;
	padding-top: 40px;
	display: flex;
	align-items: center;
	width: fit-content;
}

.header-line {
	width: 96px;
	height: 32px;
	background-color: #39daff;
	border-radius: 10px;
	margin-right: 20px;
}

h1 {
	font-family: 'Times New Roman', Times, serif;
	font-size: 36px;
	color: white;
	font-weight: bold;
}
</style>
