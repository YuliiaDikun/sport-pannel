<template>
  <main class="main">
    <Navigation />
    <UPL />
    <Standings />
    <SystemInfo />
    <div>
      <News />
    </div>
  </main>
</template>
<script setup>
import Navigation from '../components/Navigation.vue';
import UPL from '../components/UPL.vue';
import Standings from '../components/Standings.vue';
import SystemInfo from '../components/SystemInfo.vue';
import News from '../components/News.vue';
</script>
<style scoped lang="scss">
.main {
  background: $color-bg;
}
</style>
