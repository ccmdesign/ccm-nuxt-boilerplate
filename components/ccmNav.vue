<template>
  <top-nav 
    class="ccm-main-menu" 
    project-logo="CCM Design" 
    :menu-data="menu"
    color-mode="positive"
  />
</template>

<script setup>
import { menu } from '~/composables/navigation.js'
</script>

<style lang="scss" scoped>
:deep(a) {
  color: var(--base-color);
}

:deep(a:hover) {
  text-decoration: none;
  cursor: pointer;
}

</style>
