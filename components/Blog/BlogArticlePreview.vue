<template>
  <NuxtLink
    :to="{ name: 'blog-slug', params: { slug: article.slug } }"
    class="flex flex-col sm:flex-row items-center border-l-4 border-blue-400 bg-gray-200 blogarticle"
  >
    <div class="w-auto">
      <img :src="img" class="w-full m-0 h-32" alt="" />
    </div>
    <div class="ml-4 flex-1">
      <h2 class="font-bold">{{ article.title }}</h2>
      <p class="italic">
        by {{ article.author }} on {{ formatDate(article.updatedAt) }}
      </p>
      <p>{{ article.description }}</p>
    </div>
  </NuxtLink>
</template>

<style>
.blogarticle {
  transition: 0.5s all ease;
}
.blogarticle:hover {
  transform: scale(1.05);
  @apply shadow-lg;
}
</style>

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
