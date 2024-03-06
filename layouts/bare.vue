<template>
  <div class="page-wrapper">
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.page-wrapper {
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;

  main { flex: 1; }
}
</style>
