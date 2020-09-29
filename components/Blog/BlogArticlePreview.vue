<template>
  <NuxtLink
    :to="{ name: 'blog-slug', params: { slug: article.slug } }"
    class="flex flex-col sm:flex-row items-center"
  >
    <img :src="img" class="m-0 h-32" alt="" />
    <div class="ml-4">
      <h2 class="font-bold">{{ article.title }}</h2>
      <p class="italic">
        by {{ article.author }} on {{ formatDate(article.updatedAt) }}
      </p>
      <p>{{ article.description }}</p>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: ["article"],
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
  computed: {
    img() {
      return require(`../../assets/imgs/${this.article.imgsm}`);
    },
  },
};
</script>
