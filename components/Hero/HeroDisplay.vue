<template>
  <section
    class="relative w-full bg-blue-400 hero"
    style=""
    :style="{
      'background-image': 'url(' + imgSrc + ')',
    }"
  >
    <div class="slogan">
      <slot></slot>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 400px;
  background-position-x: 50%;
  background-size: cover;
  background-repeat: no-repeat;
}
.slogan {
  position: absolute;
  top: 50px;
  right: 50px;
  min-width: 300px;
  height: 300px;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-flow: column;
  justify-content: center;
  text-align: center;
  padding: 16px;
}

h1 {
  font-size: 32px;
}
</style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["imgSrc", "description"],
});
</script>
