<template>
  <main class="main">
    <Navigation />
    <UPL />
  </main>
</template>
<script setup>
import Navigation from '../components/Navigation.vue';
import UPL from '../components/UPL.vue';
</script>
<style scoped lang="scss">
.main {
  background: $color-bg;
}
</style>
