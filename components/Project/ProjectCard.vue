<template>
  <article class="px-8 py-2 projectcard">
    <a :href="url" target="_blank">
      <div
        class="flex-col border-l-4 border-blue-400 flex justify-center items-center bg-gray-100"
      >
        <div
          class="w-full flex justify-between p-4 hover:bg-gray-200"
          @click.prevent="open = !open"
        >
          <h2 class="text-xl font-bold">
            <slot name="headline">The Headline</slot>
          </h2>
          <div>
            <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"
                v-if="open"
              />
              <path
                fill="currentColor"
                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                v-else
              />
            </svg>
          </div>
        </div>
        <transition
          name="expand"
          @enter="enter"
          @after-enter="afterEnter"
          @leave="leave"
        >
          <div v-if="open" class="flex flex-row flex-wrap px-4 py-2">
            <div v-if="imgSrc" class="w-full flex justify-center sm:w-3/12">
              <img :src="img" class="h-24" />
            </div>
            <div class="w-full" :class="{ 'sm:w-9/12': imgSrc }">
              <p class="px-4">
                <slot name="text">The Text</slot>
              </p>
            </div>
            <a
              v-if="github"
              class="w-full sm:w-3/12 flex justify-center items-center gitlink"
              :href="github"
              target="_blank"
            >
              <svg
                role="img"
                height="64"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub icon</title>
                <path
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                />
              </svg>
            </a>
            <div
              class="flex flex-wrap justify-center sm:justify-end w-full"
              :class="{ 'sm:w-9/12': github }"
            >
              <div
                v-for="technology in technologies"
                :key="technology"
                class="mr-2 my-1 p-2 bg-gray-200 rounded border border-blue-500"
              >
                #{{ technology }}
              </div>
            </div>
          </div>
        </transition>
      </div>
    </a>
  </article>
</template>

<style scoped>
.gitlink svg {
  stroke: #000;
  stroke-width: 0px;
  fill: #000;
}

.gitlink:hover svg path {
  fill: #2c5282;
}
.expand-enter-active,
.expand-leave-active {
  transition-property: height, opacity;
  transition: 100ms ease-in-out;
  overflow: hidden;
}

.expand-enter,
.expand-leave-to {
  height: 0;
  opacity: 0;
}
</style>

<script>
import Vue from "vue";
export default Vue.extend({
  props: ["url", "github", "imgSrc", "technologies"],
  data() {
    return {
      open: false,
    };
  },
  computed: {
    img() {
      if (this.imgSrc) return require("../../assets/imgs/" + this.imgSrc);
      return "";
    },
  },
  methods: {
    enter(element) {
      // Save width
      const width = getComputedStyle(element).width;

      // Pose Element absolute with full size
      element.style.width = width;
      element.style.position = "absolute";
      element.style.visibility = "hidden";
      element.style.height = "auto";

      // Get computed new height of now visible element
      const height = getComputedStyle(element).height;

      // Hide element immediately
      element.style.width = null;
      element.style.position = null;
      element.style.visibility = null;
      element.style.height = 0;

      // Repaint for animation after setting height to 0
      getComputedStyle(element).height;

      // Trigger animation after setting height = 0
      requestAnimationFrame(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      // When finished, set height to auto
      element.style.height = "auto";
    },
    leave(element) {
      // Make element small again
      const height = getComputedStyle(element).height;
      element.style.height = height;
      getComputedStyle(element).height;
      requestAnimationFrame(() => {
        element.style.height = 0;
      });
    },
  },
});
</script>
