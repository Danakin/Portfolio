<template>
  <div
    @click="isActive = !isActive"
    class="servicecontainer border-black border-2 flex flex-col h-24 justify-center items-center rounded-md m-1"
    :class="{ active: isActive }"
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
</template>

<style>
.servicecontainer {
  position: relative;
  width: 30%;
  transform: rotateZ(0deg);
  transition: 0.5s transform, 0.5s width 0.5s;
}

.servicecontainer.active {
  width: 100%;
  transform: rotateZ(360deg);
}

.serviceheader {
  position: relative;
  transform: translateY(0);
}

.serviceinformation {
  position: relative;
  height: 0;
  visibility: hidden;
  opacity: 0;
  transition: 0.5s height 1s, 0s visibility 1s, 0.5s opacity 1s;
}

.serviceinformation.active {
  height: 100%;
  visibility: visible;
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
