<template>
  <div
    class="flex technologycard"
    :class="{
      'w-full': extended,
      'px-4': extended,
      'my-0': extended,
      'w-1/12': !extended,
    }"
  >
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title><slot name="title">Icon Title</slot> Icon</title>
      <slot name="path"></slot>
    </svg>
    <div v-if="extended" class="ml-2 flex-1 flex relative">
      <div class="absolute percentage">{{ width }}%</div>
      <div class="absolute technology"><slot name="title"></slot></div>
      <div
        class="progress"
        :style="{ width: width + '%', background: bgColor }"
      ></div>
      <div
        class="progress bg-gray-300"
        :style="{ width: 100 - width + '%' }"
      ></div>
    </div>
  </div>
</template>

<style>
.percentage {
  top: 50%;
  left: 50%;
  padding: 2px;
  background: rgba(255, 255, 255, 0.6);
  transform: translateX(-50%) translateY(-50%);
}

.technology {
  top: 50%;
  margin-left: 4px;
  padding: 2px;
  background: rgba(255, 255, 255, 0.6);
  transform: translateY(-50%);
}

.technologycard {
  transition: 0.3s all ease-in-out;
  margin: 2px 0;
}

.technologycard svg {
  width: 30px;
}

.progress {
  height: 30px;
}
</style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["width", "bgColor", "extended"],
});
</script>
