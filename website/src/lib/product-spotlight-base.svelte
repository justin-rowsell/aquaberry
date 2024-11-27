<script lang="ts">
	let bgColor = '#ffffff';
	let reverse = false;
	export { bgColor, reverse };
</script>

<div
	class="flex flex-col items-center justify-center px-[10%] py-8 md:flex-row"
	style="background: linear-gradient(to right, {bgColor}, white);"
>
	{#if reverse}
		<slot name="text" class="md:ml-1/4 flex-1 items-center justify-center text-left md:text-left"
		></slot>
		<slot name="image" class="mt-4 flex flex-1 items-center justify-center md:mt-0"></slot>
	{:else}
		<slot name="image" class="mt-4 flex flex-1 items-center justify-center md:mt-0"></slot>
		<slot name="text" class="md:ml-1/4 flex-1 items-center justify-center text-left md:text-left"
		></slot>
	{/if}
</div>
