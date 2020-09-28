<template>
  <section class="container mx-auto">
    <h1 class="text-3xl pt-4">Blog Posts</h1>
    <article
      class="blogoverview"
      v-for="article of articles"
      :key="article.slug"
    >
      <BlogArticlePreview :article="article"></BlogArticlePreview>
    </article>
  </section>
</template>

<style>
.blogoverview {
  @apply border-l-4 bg-gray-200 border-blue-400 my-2 pl-2;
}
</style>

<script>
export default {
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
      .fetch();
    console.log("Articles", articles);

    return {
      articles,
    };
  },
};
</script>
