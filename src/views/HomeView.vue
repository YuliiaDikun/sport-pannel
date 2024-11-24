<template>
  <main class="main">
    <Navigation />
    <UPL />
    <Standings />
  </main>
</template>
<script setup>
import Navigation from '../components/Navigation.vue';
import UPL from '../components/UPL.vue';
import Standings from '../components/Standings.vue';
</script>
<style scoped lang="scss">
.main {
  background: $color-bg;
}
</style>
