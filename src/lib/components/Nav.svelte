<script lang="ts">
	const links = [
		{
			path: '/',
			title: 'Home'
		},
		{
			path: '/blog',
			title: 'Blog'
		}
	];
</script>

<nav>
	{#each links as { path, title }}
		<a href={path}>{title}</a>
	{/each}
</nav>

<style>
	a {
		margin: 0 1rem;
	}
</style>
