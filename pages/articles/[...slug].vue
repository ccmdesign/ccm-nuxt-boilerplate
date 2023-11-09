<template>
  <div>
    <contentDoc></contentDoc>
  </div>
</template>

<script>
export default {
  watchQuery: true,
  async asyncData({ params, $content }) {
    const article = await $content('articles', params.slug).fetch()
    return { article }
  }
}
</script>

<style lang="scss" scoped>

</style>
