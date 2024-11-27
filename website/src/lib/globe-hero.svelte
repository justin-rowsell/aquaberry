<script lang="ts">
	import { onMount } from 'svelte';
	import createGlobe from 'cobe';

	let text = '';
	let subtext = '';
  export { text as title, subtext };

	let canvas: HTMLCanvasElement;
	let phi = 0;

	onMount(() => {
		const globe = createGlobe(canvas, {
			devicePixelRatio: 2,
			width: 600,
			height: 600,
			phi: 0,
			theta: 0,
			dark: 0,
			diffuse: 1.2,
			mapSamples: 16000,
			mapBrightness: 6,
			      baseColor: [1, 1, 1], // White base
      markerColor: [1, 0, 0], // Red markers
      glowColor: [0.8, 0.8, 0.8], // Light gray countries
			markers: [
				{ location: [39.7392, -104.9903], size: 0.05 }, // Denver
				{ location: [4.711, -74.0721], size: 0.05 }, // Bogota
				{ location: [40.7128, -74.006], size: 0.05 }, // New York
				{ location: [30.2672, -97.7431], size: 0.05 }, // Austin, TX
				{ location: [37.5665, 126.978], size: 0.05 }, // Seoul
				{ location: [51.5074, -0.1278], size: 0.05 }, // London
				{ location: [53.3498, -6.2603], size: 0.05 }, // Dublin
				{ location: [48.8566, 2.3522], size: 0.05 }, // Paris
				{ location: [25.033, 121.5654], size: 0.05 }, // Taipei
				{ location: [48.1351, 11.582], size: 0.05 }, // Munich
				{ location: [43.5081, 16.4402], size: 0.05 }, // Split, Croatia
				{ location: [45.4642, 9.19], size: 0.05 }, // Milan
				{ location: [41.9028, 12.4964], size: 0.05 }, // Rome
				{ location: [43.7696, 11.2558], size: 0.05 }, // Florence
				{ location: [33.4255, -111.94], size: 0.05 }, // Tempe, AZ
				{ location: [37.7749, -122.4194], size: 0.05 }, // San Francisco
				{ location: [33.749, -84.388], size: 0.05 }, // Atlanta
				{ location: [-0.1807, -78.4678], size: 0.05 }, // Quito
				{ location: [-12.0464, -77.0428], size: 0.05 }, // Lima
				{ location: [-34.9011, -56.1645], size: 0.05 }, // Montevideo
				{ location: [-34.6037, -58.3816], size: 0.05 }, // Buenos Aires
				{ location: [6.2442, -75.5812], size: 0.05 }, // Medellin
				{ location: [38.9072, -77.0369], size: 0.05 }, // Washington, DC
				{ location: [42.3601, -71.0589], size: 0.05 }, // Boston
				{ location: [40.4168, -3.7038], size: 0.05 }, // Madrid
				{ location: [41.3851, 2.1734], size: 0.05 }, // Barcelona
				{ location: [39.4699, -0.1763], size: 0.05 } // Valencia
			],
			onRender: (state) => {
				state.phi = phi;
				phi += 0.01;
			}
		});

		return () => {
			globe.destroy();
		};
	});
</script>

<div class="relative flex h-[66vh] w-full items-center justify-center overflow-hidden">
  <div
    class="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent to-90% dark:from-black/80"
  />

  <div class="relative flex flex-col md:flex-row items-center">
    <div class="flex flex-col items-start md:items-center md:mr-32 mb-16">
      <h1 class="text-primary text-left text-6xl font-bold font-heading">
        {text}
      </h1>
      <p class="text-black text-left text-lg mt-2 text-wrap max-w-lg">
        {subtext}
      </p>
    </div>
    <div class="flex h-40 w-40 items-center justify-center">
      <canvas bind:this={canvas} style="width: 300px; height: 300px" />
    </div>
	</div>
</div>