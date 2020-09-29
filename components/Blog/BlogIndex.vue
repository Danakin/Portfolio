<template>
  <section id="blogs" class="py-12 bg-gray-200 w-full">
    <section class="w-full">
      <nuxt-link to="blog" class="text-2xl">Neueste Beiträge im Blog</nuxt-link>
    </section>
    <section
      class="container mx-auto flex flex-row flex-wrap w-full justify-evenly"
    >
      <BlogOverview
        v-for="article in articles"
        :key="article.slug"
        :article="article"
      ></BlogOverview>
    </section>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["articles"],
});
</script>
