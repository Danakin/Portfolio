<template>
  <article class="w-full md:w-1/2 lg:w-1/3 p-8">
    <a :href="url" target="_blank">
      <div
        class="w-full border-l-4 border-blue-400 flex flex-row justify-center items-center md:flex-col md:pb-4 bg-blue-200 projectcard"
      >
        <div
          v-if="imgSrc"
          class="w-full flex flex-row justify-center items-center"
        >
          <img :src="img" />
        </div>
        <div>
          <h2 class="text-xl font-bold">
            <slot name="headline">The Headline</slot>
          </h2>
          <p class="px-4">
            <slot name="text">The Text</slot>
          </p>
          <a
            v-if="github"
            class="flex justify-end pr-4"
            :href="github"
            target="_blank"
          >
            <svg
              role="img"
              height="32"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>GitHub icon</title>
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              />
            </svg>
          </a>
        </div>
      </div>
    </a>
  </article>
</template>

<style>
.projectcard {
  transition: 0.3s all ease-in-out;
}
.projectcard:hover {
  @apply bg-blue-100;
  transform: rotateY(360deg) scale(1.1);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}

.projectcard img {
  display: block;
  position: relative;
  max-height: 200px;
  width: auto;
  height: auto;
}

.projectcard a {
  @apply p-4;
}

.projectcard svg {
  stroke: #000;
  stroke-width: 0px;
  fill: #000;
}

.projectcard a:hover svg path,
.a:hover {
  fill: #2c5282;
}
</style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["url", "github", "imgSrc"],
  computed: {
    img() {
      if (this.imgSrc) return require("../../assets/imgs/" + this.imgSrc);
      return "";
    },
  },
});
</script>