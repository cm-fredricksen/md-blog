export const load = async ({ fetch }) => {
	const res = await fetch('../api/posts');
	const posts = await res.json();
	console.log('load function', posts);

	return {
		posts
	};
};
