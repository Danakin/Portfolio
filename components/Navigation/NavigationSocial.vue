<template>
  <a
    :href="target"
    target="_blank"
    class="svgimg h-16 px-4 lg:px-1 inline-flex items-center hover:bg-blue-200 lg:border-b-4 border-blue-700"
  >
    <svg
      role="img"
      height="32"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{{ title }}</title>
      <slot></slot>
    </svg>
  </a>
</template>

<style>
svg {
  stroke: #fff;
  stroke-width: 0px;
  fill: #fff;
}

.svgimg:hover svg path,
.svgimg:hover {
  fill: #2c5282;
}
</style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["title", "target"],
});
</script>
