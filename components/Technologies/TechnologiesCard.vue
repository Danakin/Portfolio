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
    <div v-if="extended" class="ml-2 flex-1 flex relative progresscontainer">
      <div class="percentage">{{ width }}%</div>
      <div class="technology"><slot name="title"></slot></div>
      <div class="progressbar flex">
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
  </div>
</template>

<style>
.progress {
  height: 100%;
}

.progresscontainer {
  position: relative;
  height: 30px;
  z-index: 1;
}

.progressbar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.percentage {
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 2px;
  background: rgba(255, 255, 255, 0.6);
  -ms-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -o-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  z-index: 2;
}

.technology {
  position: absolute;
  top: 50%;
  margin-left: 4px;
  padding: 2px;
  background: rgba(255, 255, 255, 0.6);
  -ms-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: 2;
}

.technologycard {
  transition: 0.3s all ease-in-out;
  margin: 2px 0;
}

.technologycard svg {
  width: 30px;
}
</style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["width", "bgColor", "extended"],
});
</script>
