<script>
	export let data;
	const { posts } = data;
	$: console.log(posts);
</script>

<div class="container">
	<h2>Plog Posts</h2>
	<div class="section">
		{#await posts}
			<p>Loading...</p>
		{:then data}
			<div class="grid">
				{#each posts as post}
					<h4><a href="/blog/{post.id}">{post.title}</a></h4>
				{/each}
			</div>
		{/await}
	</div>
</div>

<style>
	.grid {
		display: grid;
		gap: 8px;
		grid-template-columns: repeat(4, 1fr);
	}
	.section {
		padding: 2rem 0;
	}
	/* img {
		height: 200px;
		width: 100%;
		object-fit: cover;
		object-position: center;
	} */
</style>
