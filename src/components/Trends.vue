<template>
  <section class="section">
    <h2 class="title">Тренды</h2>
    <ul class="trend-container">
      <li class="trend-item">
        <a href="#" class="trend-link">
          <IconLight class="trend-icon" />
          <p class="trend-text">Коронавирус</p>
        </a>
      </li>
      <li class="trend-item">
        <a href="#" class="trend-link">
          <IconLight class="trend-icon" />
          <p class="trend-text">Трансферы лета</p>
        </a>
      </li>
      <li class="trend-item">
        <a href="#" class="trend-link">
          <IconLight class="trend-icon" />
          <p class="trend-text">Рейтинг клубов</p>
        </a>
      </li>
      <li class="trend-item">
        <a href="#" class="trend-link">
          <IconLight class="trend-icon" />
          <p class="trend-text">Барселона</p>
        </a>
      </li>
    </ul>
  </section>
</template>
<script setup>
import IconLight from '../components/icons/IconLight.vue';
</script>
<style scoped lang="scss">
.section {
  margin: 0 12px;
  padding-bottom: 36px;
}
.title {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 11px;
}
.trend-container {
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  gap: 8px;
  & .trend-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
    padding: 9px 12px 7px 12px;
    background: rgba($color-text, 0.05);
    border-radius: 16px;
  }
  & .trend-icon {
    fill: $color-line;
  }
  & .trend-text {
    font-size: 14px;
    color: rgba($color-text, 0.7);
  }
}
@media screen and (min-width: 1024px) {
  .section {
    margin-left: 0px;
    margin-right: 0px;
  }
}
</style>
