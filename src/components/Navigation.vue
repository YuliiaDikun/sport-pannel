<template>
  <nav class="navigation desktop">
    <a href="#" aria-label="посилання на загальну сторінку про футбол" class="main-link">
      <IconBoll class="icon" />
      <p class="title">ФУТБОЛ</p>
    </a>
    <a href="#" aria-label="посилання на загальну сторінку про медалі" class="secondary-link large"
      >Зачет медалей</a
    >
    <a
      href="#"
      aria-label="посилання на загальну сторінку про рейтинги"
      class="secondary-link large"
      >Рейтинги</a
    >
  </nav>
  <nav class="navigation">
    <a href="#" class="secondary-link">Главная</a>
    <IconShevron class="icon" />
    <a href="#" class="link">Футбол</a>
  </nav>
</template>
<script setup>
import IconBoll from './icons/IconBoll.vue';
import IconShevron from './icons/IconShevron.vue';
</script>
<style scoped lang="scss">
.navigation {
  padding: 16px 12px;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 12px;
  & .main-link {
    font-size: 14px;
    color: $color-text;
    text-transform: uppercase;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 12px;
    width: fit-content;
    &::after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      right: -16px;
      height: 100%;
      width: 1.5px;
      background: $color-border;
    }
  }
  & .secondary-link {
    font-size: 12px;
    color: rgba($color-text, 0.7);
    &.large {
      font-size: 14px;
    }
  }
  & .icon {
    fill: rgba($color-text, 0.38);
  }
  & .link {
    font-size: 12px;
    color: rgba($color-text, 0.38);
  }
}
.desktop {
  display: none;
}

@media screen and (min-width: 1024px) {
  .desktop {
    display: flex;
    gap: 24px;
  }

  .mobile {
    display: none;
  }

  .navigation {
    padding: 15px 20px;
    border-bottom: 1px solid $color-border;
    & .main-link {
      margin-right: 8px;
      gap: 4px;
    }
  }

  .title {
    font-size: 14px;
  }
}
</style>
