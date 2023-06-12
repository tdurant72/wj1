export const load = async ({ fetch }) => {
	const getPosts = async () => {
		const res = await fetch('https://jsonplaceholder.typicode.com/photos');
		const data = await res.json();
		// console.log('data', data);
		const filteredData = data.slice(0, 6);
		return filteredData;
	};
	return { posts: getPosts() };
};
