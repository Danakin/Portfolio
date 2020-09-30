<template>
  <div>
    <Navbar></Navbar>
    <Nuxt class="content" />
  </div>
</template>

<style>
html {
  font-family: "Nunito", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  letter-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  @apply text-gray-800;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.content {
  margin-top: 64px;
}
</style>

<script lang="ts">
import Vue from "vue";
import Navbar from "~/components/Navigation/NavigationBar.vue";
export default Vue.extend({
  components: {
    Navbar: Navbar,
  },
  mounted() {
    document.cookie = "test=test;_cookie=wow";
  },
});
</script>
