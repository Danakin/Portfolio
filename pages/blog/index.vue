<template>
  <section class="flex flex-row flex-wrap container mx-auto">
    <h1 class="w-full text-3xl pt-4 px-2">Blog Posts</h1>
    <BlogTagList :tags="tags" class="order-2 md:order-3"></BlogTagList>
    <article class="w-full md:w-9/12 p-2 order-3 md:order-2">
      <BlogArticlePreview
        v-for="article of articles"
        :article="article"
        :key="article.slug"
      ></BlogArticlePreview>
    </article>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const tags = [];
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
        "tags",
      ])
      .sortBy("createdAt", "desc")
      .fetch();
    articles.forEach((article) => {
      const taglist = article.tags.split(" ");
      taglist.forEach((tag) => tags.push(tag));
    });

    return {
      articles,
      tags: tags.filter((v, i, a) => a.indexOf(v) === i).sort(),
    };
  },
};
</script>
