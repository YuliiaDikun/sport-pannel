<template>
  <template v-for="(key, value) in data">
    <Table :title="value" :tableElements="key" />
  </template>
</template>
<script setup>
import { defineProps } from 'vue';
import Table from './Table.vue';
const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: []
  }
});
</script>
<style scoped lang="scss"></style>
