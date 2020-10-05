<template>
  <section class="container mx-auto">
    <h1 class="text-3xl pt-4 px-2">Filter Blog Posts by Tag</h1>
    <ul v-for="tag in tags" :key="tag">
      <li>
        <NuxtLink
          :to="localePath({ name: 'blog-tags-tag', params: { tag: tag } })"
          class="flex flex-col sm:flex-row items-center border-l-4 border-blue-400 bg-gray-200 uppercase"
        >
          #{{ tag }}
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const tags = [];
    const articles = await $content("articles", params.slug)
      .only(["tags"])
      .fetch();

    articles.forEach((article) => {
      const tagList = article.tags.split(" ");
      tagList.forEach((tag) => {
        if (!tags.includes(tag)) tags.push(tag);
      });
    });

    return {
      tags: tags.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      }),
    };
  },
};
</script>
