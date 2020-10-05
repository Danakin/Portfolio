<template>
  <div
    class="w-full servicecontainer relative md:w-1/2 lg:w-1/3 p-4"
    :class="{
      active: isActive,
    }"
    @click="isActive = !isActive"
  >
    <div class="serviceitem flex flex-col justify-center items-center p-2">
      <div class="serviceheader text-2xl text-gray-900 font-bold w-full">
        <slot name="headline"></slot>
      </div>
      <div class="serviceinformation text-gray-900 w-full">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<style>
.servicecontainer {
  transform: scale(1);
  cursor: pointer;
  transition: 0.2s transform, 0.3s width 0.6s;
}
.servicecontainer.active {
  width: 100%;
  transition: 0.3s width;
}

.servicecontainer:hover {
  transform: scale(1.05);
}

.servicecontainer:hover.active {
  transform: scale(1);
}

.servicecontainer .serviceitem {
  position: relative;
  height: 75px;
  z-index: 2;
  background: rgb(225, 234, 243);
  transition: 0.3s all;
}

.servicecontainer:hover .serviceitem {
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
}

.servicecontainer .serviceitem::before {
  position: absolute;
  bottom: -4px;
  left: 0;
  height: 4px;
  width: 100%;
  background: black;
  content: "";
  z-index: 1;
  transition: 0.3s width 0.3s, 0.3s height;
}

.servicecontainer.active .serviceitem::before {
  width: 4px;
  bottom: 0;
  height: 100%;
  transition: 0.3s width 0.3s, 0.3s height 0.6s;
}

.servicecontainer .serviceitem::after {
  content: "";
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  height: 100%;
  width: 0;
  background: rgb(199, 220, 240);
  transition: 0.3s width 0.3s;
}

.servicecontainer.active .serviceitem::after {
  width: 100%;
  transition: 0.3s width 0.3s;
}

.servicecontainer .serviceheader {
  position: relative;
  z-index: 2;
  height: 50%;
}

.servicecontainer .serviceinformation {
  position: relative;
  z-index: 2;
  transition: opacity 0.3s, transform 0.3s;
  opacity: 0;
  transform: translateY(200%);
  height: 50%;
}

.servicecontainer.active .serviceinformation {
  transition: opacity 0.3s 0.6s, transform 0.3s 0.6s;
  opacity: 1;
  transform: translateY(0);
}

.servicecontainer.active .serviceitem {
  min-height: 125px;
  height: auto;
}
</style>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
};
</script>
