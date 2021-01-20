<template>
  <div
    class="hamburger lg:hidden ml-auto mr-3"
    :class="{ active: isActive }"
    @click="hamburgerClicked"
  >
    <div></div>
  </div>
</template>

<style>
.hamburger {
  border: 2px solid white;
  border-radius: 2px;
  width: 50px;
  padding: 0 5px;
}

.hamburger::before,
.hamburger::after,
.hamburger div {
  background-color: white;
  border-radius: 3px;
  content: "";
  display: block;
  height: 5px;
  margin: 7px 0;
  transition: all 0.2s ease-in-out;
}

.hamburger.active::before {
  transform: translateY(12px) translateX(1px) rotate(135deg);
}
.hamburger.active::after {
  transform: translateY(-12px) translateX(1px) rotate(-135deg);
}
.hamburger.active div {
  opacity: 0;
}
</style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["isActive"],
  methods: {
    hamburgerClicked() {
      this.$emit("hamburgerClicked");
    }
  }
});
</script>
