<template>
  <section class="w-full md:w-3/12 border-t-2 border-blue-400 p-2">
    <p
      class="mb-2 cursor-pointer md:cursor-default w-full"
      @click="extended = !extended"
    >
      Tags {{ width }}
      <i
        v-if="width < 768"
        class="arrow"
        :class="{ down: !extended, up: extended }"
      ></i>
    </p>
    <transition name="fade">
      <ul v-if="extended || width >= 768" class="w-full">
        <li>
          <NuxtLink
            :to="localePath({ name: 'blog' })"
            class="uppercase list-inside"
          >
            All
          </NuxtLink>
        </li>
        <li v-for="tag in tags" :key="tag">
          <NuxtLink
            :to="localePath({ name: 'blog-tags-tag', params: { tag: tag } })"
            class="uppercase list-inside"
          >
            #{{ tag }}
          </NuxtLink>
        </li>
      </ul>
    </transition>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: transform 0.5s, opacity 0.5s;
  -moz-transform: scaleY(100%);
  -ms-transform: scaleY(100%);
  -o-transform: scaleY(100%);
  -webkit-transform: scaleY(100%);
  transform: scaleY(100%);
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  -moz-transform: scaleY(0);
  -ms-transform: scaleY(0);
  -o-transform: scaleY(0);
  -webkit-transform: scaleY(0);
  transform: scaleY(0);
}
</style>

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
