<template>
  <section class="section">
    <h2 class="title">
      <span>Видео</span>
      <IconVideo class="title-icon" />
    </h2>
    <div class="video-thumb">
      <img src="../assets/logos/video.jpg" alt="video image" />
      <span class="video-section"> Футбол </span>
      <span class="video-sign"><IconVideo class="icon" /></span>
      <h3 class="video-title">
        Руслан КОСТЫШИН: «Футболисты выступили с инициативой сократить зарплаты»
      </h3>
      <div class="video-bottom">
        <span class="video-date">28 октября 2020</span>
        <span class="video-comments">
          <IconComments class="icon" />
          <span>999</span>
        </span>
      </div>
    </div>
  </section>
</template>
<script setup>
import IconVideo from '../components/icons/IconVideo.vue';
import IconComments from '../components/icons/IconComments.vue';
</script>
<style scoped lang="scss">
.section {
  margin: 0 12px;
  padding-bottom: 5px;
}
.title {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 7px;
  margin-bottom: 16px;
  & span {
    font-weight: bold;
    font-size: 18px;
  }
  & .title-icon {
    fill: rgba($color-text, 0.54);
  }
}
.video-thumb {
  position: relative;
  overflow: hidden;
  min-height: 202px;
  width: 100%;
  height: auto;
  border-radius: 4px;
  & img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
  & .video-section {
    font-weight: 500;
    font-size: 12px;
    line-height: 92.4%;
    display: inline-block;
    padding: 4px 10px;
    background: $color-theme;
    color: $color-bg;
    border-radius: 2px;
    position: absolute;
    top: 12px;
    left: 12px;
  }
  & .video-sign {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: rgba($color-text, 0.54);
    border-radius: 100%;
    position: absolute;
    top: 12px;
    right: 12px;
    & .icon {
      fill: none;
      width: 18px;
      height: 12px;
      stroke: $color-bg;
      stroke-width: 1px;
    }
  }
  & .video-title {
    font-weight: 500;
    font-size: 16px;
    line-height: calc(20px / 16px);
    color: $color-bg;
    position: absolute;
    bottom: 25%;
    left: 12px;
  }
  & .video-bottom {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 15px;
    position: absolute;
    bottom: 20px;
    left: 12px;
    & .video-date,
    & .video-comments {
      font-size: 12px;
      color: rgba($color-bg, 0.7);
    }
    & .video-comments {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2px;
      & .icon {
        fill: rgba($color-bg, 0.5);
      }
    }
  }
}
</style>
