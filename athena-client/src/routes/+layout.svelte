<script lang="ts">
	import Nav from '$lib/Nav.svelte';
</script>

<Nav />
<slot />

<style lang="scss">
	@import '../../static/styles/fonts.scss';

	:global(body) {
		font-family: $sans-serif;
	}
</style>
