<template>
  <stack-l class="service-card | base-card">
    <h3>{{ content.title }}</h3>
    <p>{{ content.description }}</p>
    <p><a class="button" :href="content.url">{{ content.label ? content.label : 'Read More' }}</a></p>
  </stack-l>
</template>

<script setup>
const props = defineProps({
  content: {
    type: Object,
    default: {
      title: 'service Title',
      excerpt: 'service Description',
      slug: 'service-slug',
      url: '/services/service-slug',
      img: 'img/imageName.jpg',
      label: 'Read More'
    }
  }
});
</script>

<style lang="scss" scoped>
.base-card {
  padding-block: var(--base-padding);
}

.base-card:not(:first-of-type) {
  border-top: 1px solid var(--base-color-20);
}
</style>
