<script lang="ts">
	import '../app.scss';
	import Nav from '$lib/Nav.svelte';
</script>

<Nav />
<slot />

<style lang="scss">
	@import './src/lib/scss/fonts';

	:global(body) {
		font-family: $sans-serif;
	}
</style>
