<template>
  <section>
    <HeroDisplay :imgSrc="require('~/assets/imgs/heromain.jpg')">
      <h1>Moderne Homepages nach Maß.</h1>
      <h2>Deutsch, Englisch und Japanisch.</h2>
      <h2>Interkulturell.</h2>
    </HeroDisplay>
    <section
      class="relative my-0 mx-auto flex flex-col justify-center items-center text-center"
    >
      <ServiceIndex></ServiceIndex>
      <BlogIndex :articles="articles"></BlogIndex>
      <TechnologiesIndex></TechnologiesIndex>
      <ProjectIndex></ProjectIndex>
      <ContactForm class="py-12"></ContactForm>
    </section>
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
