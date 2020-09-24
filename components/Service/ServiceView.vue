<template>
  <div
    @click="isActive = !isActive"
    class="service border-black border-2 flex flex-col h-24 justify-center items-center rounded-md m-1"
    :class="{ expand: isActive }"
  >
    <p class="text-2xl text-gray-900 font-bold">
      {{ text }}
    </p>
    <p
      class="text-gray-900 opacity-0 hidden invisible"
      :class="{ fadein: isActive }"
    >
      <slot></slot>
    </p>
  </div>
</template>

<style>
.service {
  animation: 0.75s forwards ease shrink-service;
}

.expand {
  animation: 0.75s forwards ease expand-service;
}

.fadein {
  animation: 0.3s ease 0.75s forwards change-opacity;
  display: block;
}

@keyframes change-opacity {
  0% {
    opacity: 0;
    visibility: visible;
  }
  100% {
    opacity: 1;
    visibility: visible;
  }
}

@keyframes expand-service {
  0% {
    transform: rotateZ(0deg);
    width: 30%;
  }
  60% {
    transform: rotateZ(359deg);
    width: 30%;
  }
  100% {
    transform: rotateZ(360deg);
    width: 100%;
  }
}

@keyframes shrink-service {
  0% {
    transform: rotateZ(360deg);
    width: 100%;
  }
  60% {
    transform: rotateZ(0deg);
    width: 100%;
  }
  100% {
    transform: rotateZ(0deg);
    width: 30%;
  }
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
