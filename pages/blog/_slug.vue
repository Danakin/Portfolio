<template>
  <article>
    <HeroDisplay :imgSrc="article.img">
      <template #headline>{{ article.title }}</template>
      <template #text>
        {{ article.description }}
      </template>
      <template #author>
        by {{ article.author }} on: {{ formatDate(article.updatedAt) }}
        {{ article.updated ? " (updated)" : "" }}
      </template>
    </HeroDisplay>
    <section class="mx-auto container mt-6">
      <nuxt-content :document="article" class="mx-2" />
    </section>
  </article>
</template>

<style>
.nuxt-content h1 {
  @apply text-3xl font-bold;
}

.nuxt-content h2 {
  @apply text-xl font-bold mt-8;
}

.nuxt-content pre {
  @apply border-l-4 bg-gray-200 border-blue-500;
}
</style>


<script>
export default {
  data() {
    return {
    };
  },
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
