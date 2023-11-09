<template>
  <div>
    <h1>test</h1>
    <content-list path="/articles" v-slot="{ list }">
      <div v-for="article in list" :key="article._path">
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
        <p><nuxt-link :to="article._path">Go to article</nuxt-link></p>
        <pre>
          {{ article }}
        </pre>
      </div>
    </content-list>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
