import type { SvelteComponent } from 'svelte';

export const fetchPosts = async () => {
	const allPosts = import.meta.glob<{ default: SvelteComponent; metadata: Record<string, any> }>(
		'/src/routes/blog/posts/*.md'
	);

	const postArray = Object.entries(allPosts);

	const posts = await Promise.all(
		postArray.map(async ([path, resolve]) => {
			const { metadata } = await resolve();
			const postPath = path.replace('/src/routes/blog/posts/', '/blog');

			return {
				meta: metadata,
				path: postPath
			};
		})
	);
	return posts;
};
