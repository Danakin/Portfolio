<template>
  <nuxt-link
    :to="target"
    class="lg:inline-flex w-full lg:w-auto h-16 py-4 px-3 text-blue-100 text-lg items-center justify-center hover:bg-blue-200 hover:text-blue-800 border-l-8 lg:border-l-0 lg:border-b-4 border-blue-700"
  >
    <slot></slot>
  </nuxt-link>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["target"],
});
</script>
