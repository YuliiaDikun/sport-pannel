<template>
  <section class="section">
    <div class="tab-top">
      <h2 class="tab-title">Турнирная таблица</h2>
      <ul class="tab-container">
        <li v-for="tab in tabs" :key="tab.id">
          <button
            @click="changeTab(tab.id)"
            type="button"
            class="tab-button"
            :class="{ active: activeTab === tab.id }"
          >
            {{ tab.name }}
          </button>
        </li>
      </ul>
    </div>
    <KeepAlive>
      <Tables :data="tablesDataMap[activeTab]" :key="activeTab" />
    </KeepAlive>
  </section>
</template>
<script setup>
import { ref, onMounted, KeepAlive } from 'vue';
import Tables from './Tables.vue';
import { generalTables } from '../utils/generalTables';
import { guestTables } from '../utils/guestTables';
import { homeTables } from '../utils/homeTables';
import groupedAndSortedTeams from '../utils/tablesNormalize';
const activeTab = ref('general');
const tablesData = ref([]);
const tabs = [
  {
    id: 'general',
    name: 'Загальна'
  },
  {
    id: 'home',
    name: 'Дома'
  },
  {
    id: 'guest',
    name: 'В гостях'
  }
];
const tablesDataMap = {
  general: generalTables,
  home: homeTables,
  guest: guestTables
};
const changeTab = (tab) => (activeTab.value = tab);
// onMounted(() => {
//   fetch('https://63ee0ec0388920150dd83e3c.mockapi.io/teams')
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       tablesData.value = groupedAndSortedTeams(data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });
</script>
<style scoped lang="scss">
.section {
  padding-top: 24px;
  padding-bottom: 11px;
}
.tab-top {
  margin: 0 12px 16px 0px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 12px;
  & .tab-title {
    font-weight: bold;
    font-size: 18px;
    line-height: calc(24px / 18px);
    margin-bottom: 4px;
  }
  .tab-container {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 6px;
    margin-left: 12px;
    & .tab-button {
      width: auto;
      padding: 4px 13px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      line-height: calc(25px / 14px);
      color: rgba($color-text, 0.54);
      background-color: rgba($color-light-bg, 0.08);
      border-radius: 6px;
      transition:
        color 0.3s,
        background-color 0.3s;
      &.active {
        background-color: $color-accent;
        color: rgba($color-text, 0.9);
      }
    }
  }
}
@media screen and (min-width: 1024px) {
  .section {
    margin-left: 20px;
    padding-top: 0;
    padding-bottom: 18px;
  }
  .tab-top {
    margin: 0 20px 7px 0px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
