<template>
  <NuxtLink
    :to="localePath({ name: 'blog-slug', params: { slug: article.slug } })"
    class="flex flex-col sm:flex-row items-center border-l-4 border-blue-400 bg-gray-200 mt-1 blogarticle"
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
      <p class="text-right">
        <span v-for="tag in tags" :key="tag" class="mr-1" :class="tag"
          >#{{ tag }}</span
        >
      </p>
    </div>
  </NuxtLink>
</template>

<style>
.blogarticle {
  transition: 0.25s all ease;
}
.blogarticle:hover {
  transform: scale(1.05);
  @apply shadow-lg;
}

.html {
  color: #e34f26;
}
.css {
  color: #1572b6;
}
.tailwindcss {
  color: #38b2ac;
}
.javascript {
  color: #bda916;
}
.nodejs {
  color: #339933;
}
.vuejs {
  color: #4fc08d;
}
.nuxtjs {
  color: #00c58e;
}
.php {
  color: #777bb4;
}
.laravel {
  color: #ff2d20;
}
.postgresql {
  color: #336791;
}
.python {
  color: #3776ab;
}
.tensorflow {
  color: #ff6f00;
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
    tags() {
      return this.article.tags.split(" ");
    },
  },
};
</script>
