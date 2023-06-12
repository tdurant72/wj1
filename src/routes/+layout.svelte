<script>
	import '../styles/style.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import Hero from '../components/Hero.svelte';
</script>

<Navbar />
<Hero />
<slot />

<Footer />
