<template>
	<BaseCard>
		<h1>Title</h1>
		<p>This is content inside the card component.</p>
	</BaseCard>

	<BaseCard>
		<p>Another card with different content.</p>
	</BaseCard>
</template>

<script>
import BaseCard from './components/BaseCard.vue';

export default {
	name: 'App',
	components: {
		BaseCard,
	},
};
</script>

<style>
body {
	margin: 0;
}
#app {
	padding: 100px;
	background: radial-gradient(
		71.11% 100% at 50% 0%,
		#020204 14.6%,
		#011f35 100%
	);
	box-sizing: border-box;
	width: 100vw;
	height: 100vh;
}
</style>
