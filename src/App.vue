<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <header>
    <h1>this is header</h1>
  </header>

  <RouterView />
</template>

<style scoped lang="scss">
h1 {
  color: $color-accent;
}
</style>
