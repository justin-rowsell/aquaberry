<script lang="ts">
	import BentoGrid from '$lib/bento-grid.svelte';
	import GlobeHero from '$lib/globe-hero.svelte';
	import { onMount } from 'svelte';

    let title = 'Aquaberry';
    let subtext = "Building software for a better future";

    let wildSenseSubtext = "Introducing WildSense, automated wildlife monitoring and unique species identification.";
    let wildSenseBulletPoints = [
        'Custom tailored machine learning models for unique species identification.',
        'Real-time monitoring and offline access for monitoring in remote areas.',
        'Human feedack loop for continuous improvement of the models.',
        'Save up to 90% of the time spent on manual identification.'
    ];
    let learnMoreButtonSection = '#contact';

    let climateOracleSubtext: string = "Your AI Partner in Climate Innovation. Get in touch now to for access to the alpha when it is released.";
    let climateOracleBulletPoints : string[] = [
        "Climate Oracle's AI has access to a vast database of research papers analyzing our climate challenges, ensuring you have the latest and most accurate information at your fingertips",
        "Make well-informed decisions quickly and confidently.",
        "Our AI makes complex climate data and research easily accessible to everyone."
    ];

    // Lazy load components
    let productSpotlight: any;
    let reverseProductSpotlight: any;
    let contactInfo: any;

    onMount(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target.id === 'wildsense-section' && !reverseProductSpotlight) {
                        import('$lib/reverse-product-spotlight.svelte').then(module => {
                            reverseProductSpotlight = module.default;
                        });
                    }
                    if (entry.target.id === 'climate-oracle-section' && !productSpotlight) {
                        import('$lib/product-spotlight.svelte').then(module => {
                            productSpotlight = module.default;
                        });
                    }
                    if (entry.target.id === 'contact-section' && !contactInfo) {
                        import('$lib/contact-info.svelte').then(module => {
                            contactInfo = module.default;
                        });
                    }
                }
            });
        }, { rootMargin: '50px' });

        document.querySelectorAll('section[id]').forEach(section => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    });
</script>

<svelte:head>
    <title>Aquaberry - Building Software for a Better Future</title>
    <meta name="description" content="Aquaberry develops innovative AI solutions for environmental conservation and climate research. Our products include WildSense for wildlife monitoring and Climate Oracle for climate innovation." />
    <meta property="og:title" content="Aquaberry - Building Software for a Better Future" />
    <meta property="og:description" content="Aquaberry develops innovative AI solutions for environmental conservation and climate research. Our products include WildSense for wildlife monitoring and Climate Oracle for climate innovation." />
    <meta property="og:type" content="website" />
    <link rel="preload" href="/fauna.png" as="image" />
    <link rel="preload" href="/THE_Climate_Oracle.png" as="image" />
</svelte:head>

<div class="relative h-[66vh]">
	<GlobeHero title={title} {subtext} />
</div>

<div class="relative h-auto flex justify-center bg-base-100">
    <BentoGrid />
</div>

<section id="wildsense-section" class="relative h-screen flex justify-center bg-base-100">
    {#if reverseProductSpotlight}
        <svelte:component this={reverseProductSpotlight} 
            title="WildSense" 
            {subtext} 
            bulletPoints={wildSenseBulletPoints} 
            imageUrl="/fauna.png" 
            bgColor="#01570c" 
            buttonUrl={learnMoreButtonSection} 
            headingLevel="h2" 
        />
    {:else}
        <div class="loading loading-spinner loading-lg"></div>
    {/if}
</section>

<section id="climate-oracle-section" class="relative h-screen flex justify-center bg-base-100">
    {#if productSpotlight}
        <svelte:component this={productSpotlight} 
            title="Climate Oracle" 
            {subtext} 
            bulletPoints={climateOracleBulletPoints} 
            imageUrl="/THE_Climate_Oracle.png" 
            bgColor="#7AAAAA" 
            buttonUrl={learnMoreButtonSection}
            titleColor="#99E0B4" 
            textColor="#ffffff" 
            showCountdown={true} 
            countdownDate={new Date('2025-02-01T09:00:00')}
            headingLevel="h2"
        />
    {:else}
        <div class="loading loading-spinner loading-lg"></div>
    {/if}
</section>

<section id="contact-section" class="">
    {#if contactInfo}
        <svelte:component this={contactInfo} />
    {:else}
        <div class="loading loading-spinner loading-lg"></div>
    {/if}
</section>


