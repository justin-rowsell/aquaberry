<script lang="ts">
	import BentoGrid from '$lib/bento-grid.svelte';
	import ContactInfo from '$lib/contact-info.svelte';
	import GlobeHero from '$lib/globe-hero.svelte';
	import ProductSpotlightBase from '$lib/product-spotlight-base.svelte';
	import ProductSpotlight from '$lib/product-spotlight.svelte';
	import ReverseProductSpotlight from '$lib/reverse-product-spotlight.svelte';
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

    let climateOracleSubtext = "Your AI Partner in Climate Innovation. Get in touch now to for access to the alpha when it is released.";
    let climateOracleBulletPoints = [
        "Climate Oracle's AI has access to a vast database of research papers analyzing our climate challenges, ensuring you have the latest and most accurate information at your fingertips",
        "Make well-informed decisions quickly and confidently.",
        "Our AI makes complex climate data and research easily accessible to everyone."
    ];

   
</script>

<div class="relative h-[66vh]">
	<GlobeHero title={'Aquaberry'} {subtext} />
</div>

<div class="relative h-auto flex justify-center bg-base-100">
    <BentoGrid />
</div>

<div class="relative h-screen flex justify-center bg-base-100">
    <ReverseProductSpotlight title="WildSense" subtext={wildSenseSubtext} bulletPoints={wildSenseBulletPoints} imageUrl="/fauna.png" bgColor="#01570c" buttonUrl={learnMoreButtonSection} />
</div>
<div class="relative h-screen flex justify-center bg-base-100">
    <ProductSpotlight title="Climate Oracle" subtext={climateOracleSubtext} 
        bulletPoints={climateOracleBulletPoints} imageUrl="/THE_Climate_Oracle.png" 
        bgColor="#7AAAAA" buttonUrl={learnMoreButtonSection}
        titleColor="#99E0B4" textColor="#ffffff"
         />
</div>
<!--Contact the founder section with id contact so other buttons can move here-->
<div id="contact" class="">
   <ContactInfo />
</div>


