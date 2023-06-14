<script>
	import Seo from '$lib/components/Seo.svelte';
	export let data;
	const { post } = data;
</script>

<div class="container">
	<h2>{post.title}</h2>
	<p>{post.body}</p>
</div>
<Seo title={post.title.substring(0, 10)} description="Big4Bio blog page" type="BlogPosting" />
