<script lang="ts">
	import Navbar from '$lib/navbar.svelte';
import '../app.css';
	let { children } = $props();
</script>

<Navbar />
{@render children()}
