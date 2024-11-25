<template>
  <section class="section">
    <div class="block">
      <h2 class="title">Квалификация</h2>
      <div class="row">
        <span class="notify blue"></span>
        <p>{{ UEFAText }}</p>
      </div>
      <div class="row">
        <span class="notify sky"></span>
        <p>Лига чемпионов УЕФА</p>
      </div>
      <div class="row">
        <span class="notify orange"></span>
        <p>Лига Европы УЕФА</p>
      </div>
      <div class="row">
        <span class="notify red"></span>
        <p>Понижение</p>
      </div>
    </div>
    <div class="block">
      <h2 class="title alias-title">Сокращения</h2>
      <div class="alias-container">
        <div class="alias-side" v-if="isMobile">
          <div class="alias-row">
            <p class="subtitle">О</p>
            <p>Очки</p>
          </div>
          <div class="alias-row">
            <p class="subtitle">И</p>
            <p>Игры</p>
          </div>
          <div class="alias-row">
            <p class="subtitle">З-П</p>
            <p>Забитые - пропущенные</p>
          </div>
        </div>
        <div class="alias-side">
          <div class="alias-row">
            <p class="subtitle">В</p>
            <p>Выигрыш</p>
          </div>
          <div class="alias-row">
            <p class="subtitle">Н</p>
            <p>Ничья</p>
          </div>
          <div class="alias-row">
            <p class="subtitle">П</p>
            <p>Поражение</p>
          </div>
          <div v-if="!isMobile" class="row">
            <p class="subtitle">З-П</p>
            <p>Забитые - пропущенные</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!isMobile" class="block">
      <h2 class="title">Форма</h2>
      <div class="form-row">
        <IconWin />
        <p>Выигрыш</p>
      </div>
      <div class="form-row">
        <IconLose />
        <p>Поражение</p>
      </div>
      <div class="form-row">
        <IconDraw />
        <p>Ничья</p>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, watch, computed } from 'vue';
import IconLose from './icons/IconLose.vue';
import IconWin from './icons/IconWin.vue';
import IconDraw from './icons/IconDraw.vue';
import { useWidth } from '../composables/useWidth';
const { width } = useWidth();

const isMobile = ref(true);

watch(width, () => {
  isMobile.value = width.value < 1024;
});
const UEFAText = computed(() =>
  isMobile.value ? 'Лига чемпионов УЕФА' : 'Чемпионы Лига чемпионов УЕФА'
);
</script>
<style scoped lang="scss">
.section {
  margin: 0 12px;
  & .title {
    font-weight: 500;
    font-size: 12px;
    line-height: calc(20px / 12px);
    color: rgba($color-text, 0.8);
    text-align: left;
    margin-bottom: 7px;
  }
  & .block {
    margin-bottom: 14px;
    & .alias-row {
      display: flex;
      align-items: start;
      justify-content: start;
      gap: 9px;
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 1px;
      color: rgba($color-text, 0.8);
      & .subtitle {
        font-weight: 500;
        width: 20px;
        text-align: center;
        flex-shrink: 0;
      }
    }
    & .row {
      padding-left: 5px;
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 15px;
      font-size: 12px;
      line-height: calc(16px / 12px);
      color: rgba($color-text, 0.8);
      margin-bottom: 4px;

      & .subtitle {
        font-weight: 500;
        width: 20px;
        text-align: center;
        flex-shrink: 0;
      }
      & .notify {
        width: 6px;
        height: 6px;
        border-radius: 100%;
        display: block;
        flex-shrink: 0;
        &.blue {
          background: $color-primary;
        }
        &.sky {
          background: $color-secondary;
        }
        &.orange {
          background: $color-euro;
        }
        &.red {
          background: $color-under;
        }
      }
    }
    & .alias-container {
      display: flex;
      align-items: start;
      justify-content: center;
      gap: 12px;
      & .alias-side {
        width: 50%;
        & .row {
          gap: 8px;
        }
      }
    }
  }

  .form-row {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 8px;
    font-size: 12px;
    line-height: calc(16px / 12px);
    color: rgba($color-text, 0.8);
    margin-bottom: 2px;
  }
}
@media screen and (min-width: 1024px) {
  .section {
    display: flex;
    align-items: start;
    justify-content: start;
    gap: 40px;
    margin-left: 32px;
    & .alias-title {
      text-align: center;
    }
    & .alias-container {
      justify-content: start;
      & .alias-side {
        width: 100%;
      }
    }
  }
}
</style>
