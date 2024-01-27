<template>
  <div class="page-wrapper">
    <header>
      <ccm-nav />
    </header>
    <main>
      <slot />
    </main>
    <ccm-footer />
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
