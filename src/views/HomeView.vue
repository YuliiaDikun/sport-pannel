<template>
  <main class="main">
    <Navigation />
    <div class="content">
      <section class="main-content">
        <UPL />
        <Standings />
        <SystemInfo />
      </section>
      <aside class="aside">
        <News />
        <Trends />
        <Video />
      </aside>
    </div>
  </main>
</template>
<script setup>
import Navigation from '../components/Navigation.vue';
import UPL from '../components/UPL.vue';
import Standings from '../components/Standings.vue';
import SystemInfo from '../components/SystemInfo.vue';
import News from '../components/News.vue';
import Trends from '../components/Trends.vue';
import Video from '../components/Video.vue';
</script>
<style scoped lang="scss">
.main {
  background: $color-bg;
}
@media screen and (min-width: 1024px) {
  .content {
    display: flex;
    align-items: start;
    justify-content: center;
    gap: 20px;
    & .main-content {
      width: 100%;
    }
    & .aside {
      width: 300px;
      flex-shrink: 0;
      margin-right: 20px;
    }
  }
}
</style>
