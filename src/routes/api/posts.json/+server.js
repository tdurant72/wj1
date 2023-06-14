import { json } from '@sveltejs/kit';
export const GET = async () => {
	const posts = [
		{
			userId: 1,
			id: 1,
			title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
			image: 'https://picsum.photos/id/10/600/200',
			body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
		},
		{
			userId: 1,
			id: 2,
			title: 'qui est esse',
			image: 'https://picsum.photos/id/11/600/200',
			body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'
		},
		{
			userId: 1,
			id: 3,
			title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
			image: 'https://picsum.photos/id/12/600/200',
			body: 'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut'
		}
	];

	return json(posts);
};
