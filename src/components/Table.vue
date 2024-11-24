<template>
  <div class="footboll-table">
    <div class="table-header">
      <p class="text-start">Група {{ props.title }}</p>
      <p class="games">{{ name }}</p>
      <div class="score-container">
        <p class="score">В</p>
        <p class="score">Н</p>
        <p class="score">П</p>
      </div>
      <p class="correlation-container">З - П</p>
      <template v-if="!isMobile">
        <p class="form">Форма</p>
      </template>
      <p class="points">{{ points }}</p>
    </div>

    <div v-for="(club, index) in tableElements" class="table-body">
      <div class="text-start">
        <span class="position" :class="{ main: index + 1 < 3, last: index + 1 === 3 }">
          <span class="club-id">{{ club.id }}</span>
        </span>
        <img :src="club.logo" alt="club logo" class="logo" />
        <p class="club-name">{{ club.name }}</p>
      </div>
      <p class="games">{{ club.games }}</p>
      <div class="score-container">
        <p class="score">{{ club.wins }}</p>
        <p class="score">{{ club.draws }}</p>
        <p class="score">{{ club.loses }}</p>
      </div>
      <p class="correlation-container">{{ club.scored }} - {{ club.conceded }}</p>
      <template v-if="!isMobile">
        <div class="form">
          <component v-for="c in club.form" :is="formMap[c]" />
        </div>
      </template>
      <p class="points">{{ club.points }}</p>
    </div>
  </div>
</template>
<script setup>
import { ref, defineProps, computed, watch } from 'vue';
import { useWidth } from '../composables/useWidth';
import IconLose from './icons/IconLose.vue';
import IconWin from './icons/IconWin.vue';
import IconDraw from './icons/IconDraw.vue';
const props = defineProps({
  title: String,

  tableElements: Array
});

const { width } = useWidth();

const isMobile = ref(true);

watch(width, () => {
  isMobile.value = width.value < 1024;
});

const name = computed(() => (isMobile.value ? 'И' : 'Игры'));
const points = computed(() => (isMobile.value ? 'О' : 'Очки'));
const formMap = {
  W: IconWin,
  D: IconDraw,
  L: IconLose
};
</script>

<style scoped lang="scss">
.footboll-table {
  margin-bottom: 8px;
  width: 100%;
  background-color: $color-bg;
  border-top: 1px solid transparent;
  border-right: 1px solid rgba($color-light-bg, 0.16);
  border-left: 1px solid rgba($color-light-bg, 0.16);
  border-bottom: 1px solid rgba($color-light-bg, 0.16);
  border-radius: 8px;
  overflow: hidden;
  & .table-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: $color-dark-bg;
    padding: 4px 12px;
    color: $color-bg;
    font-weight: bold;
    font-size: 12px;
    line-height: calc(20px / 12px);
  }
  & .table-body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 12px;
    font-size: 14px;
    line-height: calc(24px / 14px);
    text-align: center;
    border-bottom: 1px solid rgba($color-light-bg, 0.16);
    &:last-of-type {
      border-bottom: none;
    }
    & .position {
      flex-shrink: 0;
      width: 20px;
      height: 20px;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: $color-bg;
      &.main {
        background: $color-primary;
        & .club-id {
          color: $color-bg;
        }
      }
      &.last {
        background: $color-secondary;
        & .club-id {
          color: $color-bg;
        }
      }
    }

    & .logo {
      width: 24px;
      height: 24px;
    }
  }
}

.text-start {
  display: flex;
  align-items: center;
  justify-content: start;
  text-align: start;
  gap: 6px;
  width: 46%;
  font-size: 12px;
  line-height: calc(20px / 12px);
}
.club-name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.margin-right {
  margin-right: 6px;
}

.score-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
}
.score {
  width: 33.33%;
  text-align: center;
}
.correlation-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
}
.points {
  width: 20px;
  text-align: center;
  font-weight: bold;
}
.form {
  width: 94px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1px;
}
@media screen and (min-width: 1024px) {
  .games {
    width: 32px;
    text-align: center;
  }
  .score-container {
    width: 80px;
  }
  .correlation-container {
    width: 52px;
  }
  .points {
    width: 32px;
  }
}
</style>
