<script lang="ts">
	import ProductSpotlightBase from "./product-spotlight-base.svelte";

  
    let title = '';
    let subtext = '';
    let bulletPoints: string[] = [];
    let imageUrl = '';
    let bgColor = '#ffffff';
    let buttonUrl = '';
    let titleColor = '#000000';
    let textColor = '#000000';
  
    export { title, subtext, bulletPoints, imageUrl, bgColor, buttonUrl, titleColor, textColor };
  
    function scrollToContact(selector: string) {
      const contactSection = document.querySelector(selector);
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
      // selector will be #sectionName so we want to update the url so it reflects the section
      window.location.hash = selector;
    }
  </script>
  
  <ProductSpotlightBase {bgColor}>
    <div slot="text" class="flex-1 md:ml-1/4 justify-center items-center text-left md:text-left">
      <h2 class={"text-4xl font-headings mb-4  text-[" + titleColor + "]"}>{title}</h2>
      <!--summary text before the list-->
      <p class={"text-lg font-body text-[" + textColor + "]"}>{subtext}</p>
      <ul class={"list-disc list-inside text-[" + textColor + "]"}>
        {#each bulletPoints as point}
          <li class="text-lg font-body">{point}</li>
        {/each}
      </ul>
      <button class="btn ghost mt-4" on:click={() => scrollToContact(buttonUrl)}>Get In Touch</button>
    </div>
    <div slot="image" class="flex-1 flex justify-center items-center mt-4 md:mt-0">
      <img src={imageUrl} alt={title} class="max-w-full w-10/12 h-3/4 rounded-lg shadow-lg" />
    </div>
  </ProductSpotlightBase>