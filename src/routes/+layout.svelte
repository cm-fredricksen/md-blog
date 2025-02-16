<script lang="ts">
	import '../app.css';
	import { Header, Footer } from '$components';
	let { children } = $props();
</script>

<Header />
<div class="wrapper">
	{@render children()}
</div>
<Footer />

<style>
	.wrapper {
		width: 70%;
		margin: 1rem auto 2rem;
	}
</style>
