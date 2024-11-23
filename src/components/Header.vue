<template>
  <header class="header">
    <div class="header_block">
      <button class="mobile-icon_button">
        <IconMobileMenu />
      </button>
      <IconLogo />
    </div>
    <div class="header_block without-gap">
      <div class="matches mobile">
        <IconMatches class="icon" />
        <p class="matches_text">Матчи</p>
      </div>
      <button class="mobile-icon_button notify">
        <IconStar class="icon" />
        <span class="star-notify desktop"></span>
      </button>
      <button class="mobile-icon_button notify">
        <IconNotification class="icon" />
        <span class="news-counter desktop">
          <span class="news-number">2</span>
        </span>
      </button>
      <button class="mobile-icon_button desktop">
        <IconSearch class="icon" />
      </button>
      <button class="mobile-icon_button desktop">
        <span class="user"> D </span>
      </button>
    </div>
  </header>
</template>
<script setup>
import IconMobileMenu from './icons/IconMobileMenu.vue';
import IconLogo from './icons/IconLogo.vue';
import IconStar from './icons/IconStar.vue';
import IconNotification from './icons/IconNotification.vue';
import IconSearch from './icons/IconSearch.vue';
import IconMatches from './icons/IconMatches.vue';
</script>
<style scoped lang="scss">
.header {
  background-color: $color-dark-bg;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header_block {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.header_block.without-gap {
  gap: 0px;
}
.matches {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 9px 12px;
}
.matches_text {
  font-weight: 500;
  font-size: 14px;
  line-height: calc(22px / 14px);
  color: $color-bg;
}
button {
  background-color: transparent;
}
.mobile-icon_button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
}
.icon {
  fill: $color-bg;
}
.notify {
  position: relative;
}
.star-notify {
  position: absolute;
  top: 6px;
  right: 7px;
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 100%;
  background-color: $color-accent;
}
.news-counter {
  position: absolute;
  top: 2px;
  right: 3px;
  background: $color-news;
  border: 2px solid $color-text;
  border-radius: 100%;
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.news-number {
  color: $color-bg;
  font-weight: black;
  font-size: 10px;
  line-height: 1.2;
}
.user {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $color-bg;
  background: $color-theme;
  border-radius: 100%;
  font-weight: medium;
  font-size: 16px;
  line-height: calc(20px / 16px);
}
.desktop {
  display: none;
}

@media screen and (min-width: 1024px) {
  .desktop {
    display: block;
  }
  .mobile {
    display: none;
  }
}
</style>
