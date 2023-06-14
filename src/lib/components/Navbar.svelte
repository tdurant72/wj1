<script>
	import { page } from '$app/stores';
	// $: console.log($page);
	// let routeId;
	const navs = [
		{
			title: 'Home',
			href: '/'
		},
		{
			title: 'About',
			href: '/about'
		},
		{
			title: 'Services',
			href: '/services'
		},
		{
			title: 'Contact',
			href: '/contact'
		},
		{
			title: 'Blog',
			href: '/blog'
		}
	];
	$: routeId = $page.route.id;
	$: url = $page.url.href;
</script>

<nav>
	<div class="container">
		<h1>Big Bio Start</h1>
		<ul>
			{#each navs as { title, href }}
				<li>
					<a {href} class:active={href === '/' ? routeId === href : url.includes(href)} {title}
						>{title}</a
					>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<style>
	nav {
		background-color: #212529;
		color: white;
		padding: 1rem;
		align-items: center;
	}
	.container {
		display: flex;
		justify-content: space-between;
		max-width: 1200px;
	}
	ul {
		display: flex;
		list-style: none;
		margin: 0;
	}
	li {
		margin-right: 20px;
	}
	h1 {
		margin: 0;
		font-size: 1em;
		font-weight: normal;
	}
	a {
		text-decoration: none;
		color: rgb(192 192 192);
	}
	.active {
		color: white;
		font-weight: 600;
	}
</style>
