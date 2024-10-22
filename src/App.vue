<template>
	<AppHeader />
	<CompanyCardsContainer />
	<BaseCard>
		<h1>Title</h1>
		<p>This is content inside the card component.</p>
	</BaseCard>

	<BaseCard>
		<p>Another card with different content.</p>
	</BaseCard>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import CompanyCardsContainer from './components/CompanyCardsContainer.vue';
import BaseCard from './components/BaseCard.vue';

export default {
	name: 'App',
	components: {
		AppHeader,
		CompanyCardsContainer,
		BaseCard,
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
	background: radial-gradient(
		71.11% 100% at 50% 0%,
		#020204 14.6%,
		#011f35 100%
	);
	width: 100vw;
	height: 100vh;
	max-width: 1440px;
	box-sizing: border-box;
	overflow: hidden;
}
</style>
