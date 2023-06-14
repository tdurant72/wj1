<script>
	import What from '$lib/components/What.svelte';

	export let data;
	const { posts } = data;
</script>

<What />
<div class="container section">
	{#await posts}
		<p>Loading...</p>
	{:then data}
		<div class="grid">
			{#each posts as { title, image, body }}
				<div>
					<h5>{title.substring(0, 20)}</h5>
					<img src={image} alt={title} />
					<p>{body.substring(0, 100)}</p>
				</div>
			{/each}
		</div>
	{/await}
</div>

<svelte:head>
	<title>Big Bio Start</title>
	<meta name="description" content="Big4Bio is a biotech newsletter and information company." />
</svelte:head>

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
