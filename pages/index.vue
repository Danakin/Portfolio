<i18n>
{
  "en": {
    "headline": "Freelance Fullstack Development",
    "text": "Laravel or Node.js with Vue.js"
  },
  "de": {
    "headline": "Freelance Fullstack Entwicklung.",
    "text": "Laravel oder Node.js mit Vue.js"
  },
  "ja": {
    "headline": "フルスタックのフリーランサー",
    "text": "Vue.jsを利用してLaravelやNode.js"
  }
}
</i18n>

<template>
  <section>
    <HeroDisplay imgSrc="img/heromain.jpg">
      <template #headline>{{ $t("headline") }}</template>
      <template #text>{{ $t("text") }}</template>
    </HeroDisplay>
    <main
      class="relative my-0 mx-auto flex flex-col justify-center items-center text-center"
    >
      <About></About>
      <ServiceIndex></ServiceIndex>
      <BlogIndex :articles="articles"></BlogIndex>
      <TechnologiesIndex></TechnologiesIndex>
      <ProjectIndex></ProjectIndex>
      <ContactForm class="py-12"></ContactForm>
    </main>
  </section>
</template>


<script lang="ts">
import Vue from "vue";
import { $content } from "@nuxt/content";

export default Vue.extend({
  async asyncData({ $content, params }) {
    const articles = await $content("articles", params.slug)
      .only([
        "title",
        "description",
        "img",
        "imgsm",
        "slug",
        "author",
        "createdAt",
        "updatedAt",
      ])
      .sortBy("createdAt", "desc")
      .limit(3)
      .fetch();

    return {
      articles,
    };
  },
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
});
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

/* .container {
  position: relative;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
} */
</style>
