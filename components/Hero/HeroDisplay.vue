<template>
  <section
    class="relative w-full bg-blue-400 hero"
    style=""
    :style="{
      'background-image': 'url(' + imgSrc + ')',
    }"
  >
    <div class="slogan">
      <h1 class="text-3xl"><slot name="headline"></slot></h1>
      <p class="text-xl"><slot name="text"></slot></p>
      <p class="text-xl italic"><slot name="author"></slot></p>
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
  top: 50%;
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 50px;
  min-width: 100px;
  max-width: 500px;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-flow: column;
  justify-content: center;
  text-align: center;
  padding: 32px;
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
