<script setup>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
</script>

<template>
  <Header />

  <RouterView />
</template>

<style scoped lang="scss">
@import '@/assets/scss/global.scss';
</style>
