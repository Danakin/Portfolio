<template>
  <article class="w-full md:w-1/2 lg:w-1/3 px-8 py-2">
    <NuxtLink
      :to="{ name: 'blog-slug', params: { slug: article.slug } }"
      class="w-full flex flex-row md:flex-col justify-center items-center border-l-4 border-blue-400 bg-white md:pb-4 blogcard hover:shadow-lg"
    >
      <div>
        <img :src="img" />
      </div>
      <div>
        <h2 class="font-bold">{{ article.title }}</h2>
        <p>{{ article.description }}</p>
      </div>
    </NuxtLink>
  </article>
</template>

<style>
.blogcard {
  transition: 0.1s all ease-in-out;
}

.blogcard:hover {
  transform: scale(1.05);
}
</style>

<script>
export default {
  props: ["article"],
  computed: {
    img() {
      // return this.article.imgsm;
      return require(`../../assets/imgs/${this.article.imgsm}`);
    },
  },
};
</script>
