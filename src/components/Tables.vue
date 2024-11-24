<template>
  <template v-for="(value, key) in data">
    <Table :title="key" :tableElements="value" />
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
