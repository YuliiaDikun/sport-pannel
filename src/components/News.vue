<template>
  <section class="section">
    <h2 class="title">Главные новости</h2>
    <ul class="news-list">
      <li class="news-item">
        <a aria-labe="посилання на статтю" href="#" class="news-link">
          <IconArrow class="news-icon" />
          <h3 class="news-title">
            Артем ФРАНКОВ: «Я не сторонник перехода на систему весна-осень»
          </h3>
        </a>
      </li>
      <li class="news-item">
        <a aria-labe="посилання на статтю" href="#" class="news-link">
          <IconArrow class="news-icon" />
          <h3 class="news-title">
            Welcome to the team! Макгрегор поприветствовал Пакьяо в своей команде
          </h3>
        </a>
      </li>
      <li class="news-item">
        <a aria-labe="посилання на статтю" href="#" class="news-link">
          <IconArrow class="news-icon" />
          <h3 class="news-title">КАРИКАТУРА ДНЯ. Сэйв столетия от Бэнкса после удара Пеле</h3>
        </a>
      </li>
      <li class="news-item">
        <a aria-labe="посилання на статтю" href="#" class="news-link">
          <IconArrow class="news-icon" />
          <h3 class="news-title">Евгений Лунин стал игроком месяца в Овьедо</h3>
        </a>
      </li>
      <li class="news-item">
        <a aria-labe="посилання на статтю" href="#" class="news-link">
          <IconArrow class="news-icon" />
          <h3 class="news-title">
            Welcome to the team! Макгрегор поприветствовал Пакьяо в своей команде
          </h3>
        </a>
      </li>
    </ul>
  </section>
</template>
<script setup>
import IconArrow from './icons/IconArrow.vue';
</script>
<style scoped lang="scss">
.section {
  padding-top: 17px;
  padding-bottom: 35px;
  margin: 0 12px;
  & .title {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 15px;
  }
  & .news-item {
    padding-top: 15px;
    padding-bottom: 15px;
    border-top: 1px solid $color-border;
    &:last-of-type {
      border-bottom: 1px solid $color-border;
    }
    & .news-link {
      display: flex;
      align-items: start;
      justify-content: start;
      gap: 12px;
    }
    & .news-icon {
      margin-left: 3px;
      margin-top: 4px;
      flex-shrink: 0;
      fill: rgba($color-text, 0.38);
    }
    & .news-title {
      font-weight: 500;
      font-size: 16px;
      line-height: 1.4;
      color: rgba($color-text, 0.8);
    }
  }
}
@media screen and (min-width: 1024px) {
  .section {
    margin-left: 0px;
    margin-right: 0px;
    padding-top: 24px;
    padding-bottom: 42px;
  }
}
</style>
