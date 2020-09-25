<template>
  <a
    :href="target"
    target="_blank"
    class="h-16 px-4 lg:px-1 inline-flex items-center hover:bg-blue-800"
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

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["title", "target"],
});
</script>
