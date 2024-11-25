<template>
  <section class="upl-container">
    <div class="desktop-image-container desktop">
      <img class="desktop-image" src="../assets/logos/desktop-upl.png" alt="upl logo" />
    </div>
    <div>
      <div class="top">
        <img class="mobile-image mobile" src="../assets/logos/upl.webp" alt="upl logo" />
        <div>
          <h1 class="title">Украинская Премьер-Лига</h1>
          <p class="subtitle">Сезон 2019/2020 32-й тур</p>
        </div>
      </div>
      <ul class="upl-navigation">
        <li v-for="link in arrayOfLinks" :key="link.id">
          <p
            @click="changeTab(link.id)"
            class="link"
            :class="{ active: activeTab === link.id, desktop: desktopLinks.includes(link.id) }"
          >
            <span class="nav-text">{{ link.title }}</span>
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue';
const desktopLinks = ['spectators', 'transfer'];
const arrayOfLinks = [
  {
    id: 'main',
    title: 'Главная'
  },
  {
    id: 'table',
    title: 'Таблица'
  },
  {
    id: 'calendar',
    title: 'Календарь'
  },
  {
    id: 'bombardyr',
    title: 'Бомбардиры'
  },
  {
    id: 'spectators',
    title: 'Зрители'
  },
  {
    id: 'transfer',
    title: 'Трансферы'
  }
];

const activeTab = ref('table');
const changeTab = (tab) => {
  activeTab.value = tab;
};
</script>

<style scoped lang="scss">
.upl-container {
  margin: 0 12px;
  border: 1px solid $color-border;
  border-radius: 2px;
  & .desktop-image-container {
    margin: 16px;
    & .desktop-image {
      width: 80px;
      height: 80px;
      object-fit: contain;
    }
  }

  & .top {
    padding: 16px 16px 24px 16px;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 12px;
    & .image {
      width: 48px;
      height: 48px;
      object-fit: contain;
    }
    & .title {
      padding-top: 6px;
      font-size: 18px;
      font-weight: 500;
      line-height: calc(20px / 18px);
      margin-bottom: 8px;
      color: $color-text;
    }
    & .subtitle {
      font-size: 12px;
      color: rgba($color-text, 0.38);
    }
  }
  .upl-navigation {
    border-top: 1px solid $color-border;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 11px 16px;
    & .link {
      font-size: 12px;
      color: rgba($color-text, 0.54);
      &.active {
        position: relative;
        font-weight: 500;
        opacity: 100%;
        &::after {
          content: '';
          display: block;
          position: absolute;
          bottom: -12px;
          left: 0px;
          width: 100%;
          height: 2px;
          background: $color-line;
        }
      }
    }
  }
}
.desktop {
  display: none;
}
.nav-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
@media screen and (min-width: 360px) {
  .upl-navigation {
    gap: 24px;
  }
}
@media screen and (min-width: 1024px) {
  .desktop {
    display: flex;
    gap: 24px;
  }

  .mobile {
    display: none;
  }
  .upl-container {
    margin: 24px 0px 28px 20px;
    display: flex;
    align-items: center;
    justify-content: start;
    & .top {
      padding-top: 32px;
      padding-bottom: 15px;
      & .title {
        font-size: 24px;
        padding-top: 0;
        margin-bottom: 3px;
      }
    }
    & .upl-navigation {
      border-top: 1px solid transparent;
      gap: 24px;
      & .link {
        &.active {
          &::after {
            bottom: -13px;
          }
        }
      }
    }
  }
}
</style>
