<template>
  <nuxt-link
    :to="target"
    class="lg:inline-flex w-full lg:w-auto py-4 px-3 text-blue-100 text-lg items-center justify-center hover:bg-blue-800"
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
