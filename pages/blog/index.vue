<template>
  <section class="container mx-auto">
    <h1 class="text-3xl pt-4 px-2">Blog Posts</h1>
    <article class="m-2" v-for="article of articles" :key="article.slug">
      <BlogArticlePreview :article="article"></BlogArticlePreview>
    </article>
  </section>
</template>

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

    return {
      articles,
    };
  },
};
</script>
