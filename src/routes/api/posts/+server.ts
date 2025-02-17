import { fetchPosts } from '$lib/utils/fetchPosts/index';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const posts = await fetchPosts();
	console.log('api fetch', posts[0].meta);
	console.log('api fetch', posts[0].path);
	return json(posts);
};
