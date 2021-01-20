<i18n>
{
  "en": {
    "headline": "Newest Blog Entries"
  },
  "de": {
    "headline": "Neueste Beiträge im Blog"
  },
  "ja": {
    "headline": "最新のブログエントリー"
  }
}
</i18n>

<template>
  <section id="blogs" class="py-16 bg-gray-200 w-full">
    <section class="w-full">
      <nuxt-link to="blog" class="text-2xl">{{ $t("headline") }}</nuxt-link>
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
