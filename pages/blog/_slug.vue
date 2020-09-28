<template>
  <article class="mx-auto container">
    <section class="pt-4">
      <h1 class="text-4xl">{{ article.title }}</h1>
      <div class="border-l-4 border-gray-200 pl-4">
        {{ article.description }}
      </div>
    </section>
    <img :src="article.img" :alt="article.alt" />
    <p class="italic">
      by {{ article.author }} on: {{ formatDate(article.updatedAt) }}
      {{ article.updated ? " (updated)" : "" }}
    </p>

    <nuxt-content :document="article" class="mx-2" />
  </article>
</template>

<style>
.nuxt-content h1 {
  @apply text-3xl;
}

.nuxt-content pre {
  @apply border-l-4 bg-gray-200 border-blue-500;
}
</style>


<script>
export default {
  async asyncData({ $content, params }) {
    // fetch our article here
    const article = await $content("articles", params.slug).fetch();

    return { article };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>
