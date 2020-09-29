<template>
  <div
    class="w-full servicecontainer relative md:w-1/2 lg:w-1/3 p-4"
    :class="{
      active: isActive,
    }"
    @click="isActive = !isActive"
  >
    <div
      class="serviceitem flex flex-col justify-center items-center"
      :class="{
        active: isActive,
      }"
    >
      <p
        class="serviceheader text-2xl text-gray-900 font-bold"
        :class="{ active: isActive }"
      >
        {{ text }}
      </p>
      <p class="serviceinformation text-gray-900" :class="{ active: isActive }">
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<style>
.servicecontainer {
  transform: rotateZ(0deg);
  transition: 0.5s transform, 0.5s width 0.5s;
  cursor: pointer;
}

.servicecontainer.active {
  width: 100%;
  transform: rotateZ(360deg);
}

.serviceitem {
  border-bottom: 4px solid black;
  border-left: 0;
  transition: 1s border, 1s background, 1s height;
  height: 75px;
}
.serviceitem.active {
  border-left: 4px solid black;
  border-bottom: 0;
  background: rgb(237, 242, 247);
  min-height: 125px;
  height: auto;
}

.serviceheader {
  position: relative;
  transition: 1s all;
}
.serviceheader.active {
  text-transform: uppercase;
}

.serviceinformation {
  position: relative;
  height: 0;
  visibility: hidden;
  opacity: 0;
  transition: 0.5s height 1s, 0s visibility 1s, 0.5s opacity 1s;
}

.serviceinformation.active {
  visibility: visible;
  height: auto;
  opacity: 1;
}
</style>

<script>
export default {
  props: ["text"],
  data() {
    return {
      isActive: false,
    };
  },
};
</script>
