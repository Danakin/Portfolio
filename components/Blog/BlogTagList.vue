<template>
  <section class="w-full md:w-3/12 border-t-2 border-blue-400 p-2">
    <p
      class="mb-2 cursor-pointer md:cursor-default w-full"
      @click="extended = !extended"
    >
      Tags
      <i
        v-if="width < 768"
        class="arrow"
        :class="{ down: !extended, up: extended }"
      ></i>
    </p>
    <section class="taglist" v-if="extended || width > 768">
      <ul class="w-full">
        <li>
          <NuxtLink
            :to="localePath({ name: 'blog' })"
            class="bg-gray-200 uppercase list-inside"
          >
            All
          </NuxtLink>
        </li>
        <li v-for="tag in tags" :key="tag">
          <NuxtLink
            :to="localePath({ name: 'blog-tags-tag', params: { tag: tag } })"
            class="bg-gray-200 uppercase list-inside"
          >
            #{{ tag }}
          </NuxtLink>
        </li>
      </ul>
    </section>
    <section>
      {{ tags }}
    </section>
  </section>
</template>

<script>
export default {
  props: ["tags"],
  data() {
    return {
      extended: false,
      width: 800,
    };
  },
  methods: {
    windowResized() {
      this.width = window.innerWidth;
    },
  },
  mounted() {
    this.width = window.innerWidth;
    window.addEventListener("resize", this.windowResized);
  },
  destroyed() {
    window.removeEventListener("resize", this.windowResized);
  },
};
</script>
