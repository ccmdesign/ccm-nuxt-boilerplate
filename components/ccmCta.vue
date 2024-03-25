<template>
  <!-- 
  This component uses a fallback system for the props. If a prop is not provided, it will use the corresponding value from the 'content' prop.
  For example, if 'title' prop is not provided, it will use 'content.title' as the title.
  This applies to the following props: title, description, label, url.
  -->
  <stack-l class="cta" :title="title" :description="description" :label="label" :url="url" :content="content">
    <h3>{{ title ? title : content.title }}</h3>
    <p>{{ description ? description : content.description }}</p>
    <div>
      <base-button el="nuxt-link" :to="url ? url : content.url">{{ label ? label : content.label }}</base-button>
    </div>
  </stack-l>
</template>

<script setup>

const props = defineProps({
  title: String,
  description: String,
  label: String,
  url: String,
  content: {}
  // The 'content' prop is an object that should have the following structure by default:
  // {
  //   title: 'Default Title',
  //   description: 'Default Description',
  //   label: 'Default Label',
  //   url: 'Default URL'
  // }
})
</script>

<style lang="scss" scoped>
.cta {
  border: 1px solid var(--base-color-20);
  padding: var(--base-padding);
  container-type: inline-size;
  background-color: var(--base-color-10);
}

@container (max-width: 300px) {
  .cta h3 { font-size: 1.2rem; }
}
</style>
