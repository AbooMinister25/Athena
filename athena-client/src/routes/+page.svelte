<svelte:head>
	<title>Home</title>
</svelte:head>

<h1 class="title">A modern platform to explore the limitless world of numbers</h1>

<style lang="scss">
	@import 'node_modules/nord/src/sass/nord.scss';
	.title {
		color: $nord2;
		width: 90%;
		margin: 3rem auto;
        font-size: 3rem;

		@media (min-width: 441px) {
			width: 75%;
		}

        @media (min-width: 801px) {
			width: 50%;
		}
	}
</style>
