<script>
	import What from '../components/What.svelte';

	export let data;
	const { posts } = data;
</script>

<What />
<div class="container section">
	{#await posts}
		<p>Loading...</p>
	{:then data}
		<div class="grid">
			{#each posts as { title, url }}
				<div>
					<img src={url} alt={title} />
					<p>{title}</p>
				</div>
			{/each}
		</div>
	{/await}
</div>

<style>
	.grid {
		display: grid;
		gap: 8px;
		grid-template-columns: repeat(3, 1fr);
	}
	.section {
		padding: 2rem 0;
	}
	img {
		height: 200px;
		width: 100%;
		object-fit: cover;
		object-position: center;
	}
</style>
