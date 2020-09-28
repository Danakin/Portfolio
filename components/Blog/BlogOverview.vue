<template>
  <article class="w-full md:w-1/2 lg:w-1/3 px-8 py-2">
    <NuxtLink
      :to="{ name: 'blog-slug', params: { slug: article.slug } }"
      class="w-full block rounded shadow-lg border-l-4 border-blue-400 bg-white"
    >
      <img :src="article.img" />
      <div>
        <h2 class="font-bold">{{ article.title }}</h2>
        <p>{{ article.description }}</p>
      </div>
    </NuxtLink>
  </article>
</template>

<script>
export default {
  props: ["article"],
};
</script>
