<script lang="ts">
	import { onMount } from 'svelte';
	import ProductSpotlightBase from './product-spotlight-base.svelte';

	let {
		title,
		subtext,
		bulletPoints,
		imageUrl,
		bgColor,
		buttonUrl,
		titleColor,
		textColor,
		showCountdown = false,
		countdownDate = new Date()
	} = $props();

	function scrollToContact(selector: string) {
		const contactSection = document.querySelector(selector);
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: 'smooth' });
		}
		// selector will be #sectionName so we want to update the url so it reflects the section
		window.location.hash = selector;
	}

	let days = $state(0);
	let hours = $state(0);
	let minutes = $state(0);
	let seconds = $state(0);

	function updateCounter() {
		const now = new Date();
		const timeDifference = countdownDate.getTime() - now.getTime();
		days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
		hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
		seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
	}

	onMount(() => {
		updateCounter(); // Initial call to set the counters immediately
		const interval = setInterval(updateCounter, 1000);
		return () => clearInterval(interval);
	});
</script>

<ProductSpotlightBase {bgColor}>
	<div slot="text" class="flex-1 md:ml-1/4 justify-center items-center text-left md:text-left">
    <h2 class="text-4xl font-headings text-accent mb-4">{title}</h2>
    <!--summary text before the list-->
    <p class="text-lg font-body text-white">{subtext}</p>
    <ul class="list-disc list-inside text-white">
      {#each bulletPoints as point}
        <li class="text-lg font-body">{point}</li>
      {/each}
    </ul>
		{#if showCountdown}
			<div class="grid auto-cols-max grid-flow-col gap-5 text-center mt-4">
				<div class="bg-info rounded-box text-neutral-content flex flex-col p-2">
					<span class="countdown font-mono text-5xl">
						<span style={'--value:' + days + ';'}></span>
					</span>
					days
				</div>
				<div class="bg-info rounded-box text-neutral-content flex flex-col p-2">
					<span class="countdown font-mono text-5xl">
						<span style={'--value:' + hours + ';'}></span>
					</span>
					hours
				</div>
				<div class="bg-info rounded-box text-neutral-content flex flex-col p-2">
					<span class="countdown font-mono text-5xl">
						<span style={'--value:' + minutes + ';'}></span>
					</span>
					min
				</div>
				<div class="bg-info rounded-box text-neutral-content flex flex-col p-2">
					<span class="countdown font-mono text-5xl">
						<span style={'--value:' + seconds + ';'}></span>
					</span>
					sec
				</div>
			</div>
		{/if}
		<button class="btn ghost mt-4" onclick={() => scrollToContact(buttonUrl)}>Get In Touch</button>
	</div>
	<div slot="image" class="mt-4 flex flex-1 items-center justify-center md:mt-0">
		<img src={imageUrl} alt={title} class="h-3/4 w-10/12 max-w-full rounded-lg shadow-lg" />
	</div>
</ProductSpotlightBase>
