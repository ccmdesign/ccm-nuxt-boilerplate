<template>
  <!-- Access `type` prop in Dynamic class  -->
  <div class="cta-box not-prose" :label="label" :url="url">
    <stack-l>
      <slot />
      <base-button el="a" :href="url" color="white">{{ label }}</base-button>
    </stack-l>
    
    
  </div>
</template>

<script setup>
// import icons from HeroIcons
// define props in <script>
const props = defineProps({
  label: String,
  url: String
});
</script>

<style lang="scss">
.cta-box {
  background-color: var(--base-color);
  padding: var(--base-padding);

  h3 a { color: var(--white-color) !important; }
  p { color: var(--white-color) !important; }
}

</style>
