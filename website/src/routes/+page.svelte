<script lang="ts">
	import BentoGrid from '$lib/bento-grid.svelte';
	import GlobeHero from '$lib/globe-hero.svelte';
	import { onMount } from 'svelte';
	import { AlphaAccessService } from '$lib/services/alpha-access';
	import Toast from '$lib/toast.svelte';

    let title = 'Aquaberry';
    let subtext = "Building software for a better future";

    let wildSenseSubtext = "Introducing WildSense, automated wildlife monitoring and unique species identification.";
    let wildSenseBulletPoints = [
        'Custom tailored machine learning models for unique species identification.',
        'Real-time monitoring and offline access for monitoring in remote areas.',
        'Human feedack loop for continuous improvement of the models.',
        'Save up to 90% of the time spent on manual identification.'
    ];
    let learnMoreButtonSection = '#alpha-access-section';

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

    // Toast state
    let showToast = false;
    let toastMessage = '';
    let toastType: 'success' | 'error' | 'info' = 'info';

    function showToastMessage(message: string, type: 'success' | 'error' | 'info' = 'info') {
        console.log('showToastMessage', message, type);
        toastMessage = message;
        toastType = type;
        showToast = true;
    }

    function validateEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    async function handleAlphaAccessSubmit() {
        const nameInput = document.querySelector('input[name="name"]') as HTMLInputElement;
        const emailInput = document.querySelector('input[name="email"]') as HTMLInputElement;
        const productSelect = document.querySelector('select[name="product"]') as HTMLSelectElement;

        if (!nameInput || !emailInput || !productSelect) {
            showToastMessage('Please fill in all fields', 'error');
            return;
        }

        if (!validateEmail(emailInput.value)) {
            showToastMessage('Please enter a valid email address', 'error');
            return;
        }

        const data = {
            email: emailInput.value,
            product: productSelect.value,
            name: nameInput.value
        };
        
        const success = await AlphaAccessService.requestAccess(data);
        
        if (success) {
            showToastMessage('Thank you for your interest! We will be in touch soon.', 'success');
            nameInput.value = '';
            emailInput.value = '';
            productSelect.value = '';
        } else {
            showToastMessage('There was an error submitting your request. Please try again.', 'error');
        }
    }

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
    <link rel="preload" href="/windmill_bg.png" as="image" />
</svelte:head>

<div class="bg-primary text-primary-content p-4 mt-4 text-center">
    <div class="flex items-center justify-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clip-rule="evenodd" />
            <path d="m10.076 8.64-2.201-2.2V4.874a.75.75 0 0 0-.364-.643l-3.75-2.25a.75.75 0 0 0-.916.113l-.75.75a.75.75 0 0 0-.113.916l2.25 3.75a.75.75 0 0 0 .643.364h1.564l2.062 2.062 1.575-1.297Z" />
            <path fill-rule="evenodd" d="m12.556 17.329 4.183 4.182a3.375 3.375 0 0 0 4.773-4.773l-3.306-3.305a6.803 6.803 0 0 1-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 0 0-.167.063l-3.086 3.748Zm3.414-1.36a.75.75 0 0 1 1.06 0l1.875 1.876a.75.75 0 1 1-1.06 1.06L15.97 17.03a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
        </svg>
        <p class="text-lg font-semibold">A new and improved website is coming soon! Stay tuned for an even better experience.</p>
    </div>
</div>

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
            countdownDate={new Date('2025-07-01T09:00:00')}
            headingLevel="h2"
        />
    {:else}
        <div class="loading loading-spinner loading-lg"></div>
    {/if}
</section>

<section id="alpha-access-section" class="hero min-h-screen" style="background-image: url(/windmill_bg.png);">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center">
        <div class="max-w-[800px]">
            <h2 class="text-5xl font-bold mb-2 text-white">Request Alpha Access</h2>
            <p class="text-white mb-8 text-lg font-light text-left ">Be the first to access our new products and services. Those on the waitlist will be given priority access when the alpha is released.</p>
            <div class="join w-full bg-base-100/90 p-4 rounded-lg shadow-xl">
                <div class="join-item flex-1 pr-2">
                    <input 
                        type="text" 
                        name="name" 
                        class="input input-bordered w-full" 
                        placeholder="Your name"
                        required
                    />
                </div>
                <div class="join-item flex-1 pr-2">
                    <input 
                        type="email" 
                        name="email" 
                        class="input input-bordered w-full" 
                        placeholder="Your email"
                        required
                    />
                </div>
                <div class="join-item flex-1 pr-2">
                    <select 
                        name="product" 
                        class="select select-bordered" 
                        required
                    >
                        <option value="" disabled selected>Select product</option>
                        <option value="bn4e75ts151gvm6">WildSense</option>
                        <option value="229981v19n8963s">Climate Oracle</option>
                    </select>
                </div>
                <div class="join-item flex-1 pr-2">
                    <button 
                        type="submit" 
                        class="btn btn-primary"
                        on:click={handleAlphaAccessSubmit}
                    >
                        Request Access
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="contact-section" class="">
    {#if contactInfo}
        <svelte:component this={contactInfo} />
    {:else}
        <div class="loading loading-spinner loading-lg"></div>
    {/if}
</section>

<Toast 
    message={toastMessage}
    type={toastType}
    show={showToast}
/>


