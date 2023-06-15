<script>
	export let size = 'medium';
</script>

<button class:small={size === 'small'} class:medium={size === 'medium'} {...$$restProps}>
	<slot />
</button>

<style>
	button {
		border: none;
		border-radius: 0.25em;
		background-color: var(--primary-color);
		color: white;
		font-size: 1em;
		cursor: pointer;
	}
	.medium {
		padding: 0.5em 1.5em;
		font-size: 1.2rem;
	}
	.small {
		padding: 0.25em 0.5em;
		font-size: 0.75ren;
	}
</style>
