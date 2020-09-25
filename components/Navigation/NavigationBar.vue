<template>
  <nav class="flex items-center bg-gray-800 flex-wrap fixed">
    <a class="pl-3" href="#">
      <svg
        v-if="width > 640"
        width="200"
        height="64"
        version="1.1"
        viewBox="0 0 44.586 12.84"
      >
        <g transform="translate(0 .3045272)">
          <text
            transform="scale(.96437 1.037)"
            x="0"
            y="11"
            style="fill: #fff; font-family: 'Franklin Gothic'; font-size: 12px"
          >
            BR
          </text>
          <path
            d="m18.177 3.0251-1.9174-0.097008a0.87983 0.87983 0 0 1-0.89803-0.81308v-1.1589a0.81309 0.81309 0 0 1 0.92229-0.71601l1.881 0.097009a0.87983 0.87983 0 0 1 0.89197 0.80703v1.2135a0.77061 0.77061 0 0 1-0.87984 0.66748z"
            style="stroke-width: 0.45508px; stroke: #fff; fill: none"
          />
          <path
            d="m18.948 1.6842a2.5485 2.5485 0 0 1 1.7597 0.048618c0.18806 0.072929 0.78274 0.3216 0.84948 0.5097 0.06673 0.18805-0.11535 0.35801-0.18806 0.49756a0.74027 0.74027 0 0 0 0.4733 0.98905l1.7597 0.73421a0.92231 0.92231 0 0 0 1.1772-0.34586l0.52183-1.0497a0.77668 0.77668 0 0 0-0.49149-1.0315l-1.7233-0.71601a0.91624 0.91624 0 0 0-1.1772 0.33978l-0.30339 0.6068"
            style="stroke-width: 0.45508px; stroke: #fff; fill: none"
          />
          <path
            d="m22.941 5.1731-0.81308 4.0412a2.3604 2.3604 0 0 1-0.54609 1.2135 2.3118 2.3118 0 0 1-1.2621 0.53398 5.5763 5.5763 0 0 1-2.0752-0.08485 5.91 5.91 0 0 1-1.9174-0.67351 2.239 2.239 0 0 1-0.96476-0.98905 2.1662 2.1662 0 0 1-0.09105-1.2925l0.83129-4.1261 1.5655 0.29731-0.87377 4.1261c-0.10916 0.55825 0.24273 0.83735 0.57038 1.0861a2.9368 2.9368 0 0 0 1.2136 0.43083 2.9914 2.9914 0 0 0 1.4684-0.042428c0.37014-0.11536 0.54611-0.23665 0.65532-0.76456l0.81308-4.0411z"
            style="stroke-width: 0.1; stroke: #fff; fill: #fff"
          />
          <text
            transform="scale(.96437 1.037)"
            x="25"
            y="11"
            style="fill: #fff; font-family: 'Franklin Gothic'; font-size: 12px"
          >
            CKE
          </text>
        </g>
      </svg>
      <svg v-if="width <= 640" width="64" height="64">
        <path
          d="M21.77,18.24l-9.59-.49a4.4,4.4,0,0,1-4.49-4.07V7.89A4.07,4.07,0,0,1,12.18,4.3h.12l9.41.49a4.39,4.39,0,0,1,4.46,4V14.9a3.86,3.86,0,0,1-4.3,3.35Z"
          style="stroke-width: 2px; stroke: #fff; fill: none"
        />
        <path
          d="M25.35,11.14a12.75,12.75,0,0,1,8.8.24c.94.37,3.92,1.61,4.25,2.55s-.58,1.79-.94,2.49a3.69,3.69,0,0,0,2,4.82,2,2,0,0,0,.34.12L48.62,25a4.6,4.6,0,0,0,5.89-1.73l2.61-5.24A3.88,3.88,0,0,0,55,13l-.3-.11L46.05,9.32A4.59,4.59,0,0,0,40.16,11l-1.52,3"
          style="stroke-width: 2px; stroke: #fff; fill: none"
        />
        <path
          d="M47.19,29.11,43.13,49.32a11.82,11.82,0,0,1-2.73,6.06,11.56,11.56,0,0,1-6.31,2.67,27.89,27.89,0,0,1-10.38-.42,29.44,29.44,0,0,1-9.58-3.37A11.25,11.25,0,0,1,9.3,49.32a10.92,10.92,0,0,1-.45-6.47L13,22.22l7.83,1.49L16.46,44.34c-.54,2.79,1.22,4.19,2.85,5.43a14.65,14.65,0,0,0,6.07,2.15,15,15,0,0,0,7.34-.21c1.85-.57,2.73-1.18,3.28-3.82l4.07-20.21Z"
          style="stroke-width: 2px; stroke: #fff; fill: #fff"
        />
      </svg>
    </a>
    <button
      class="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
      data-target="#navigation"
    >
      <i class="material-icons">menu</i>
    </button>
    <div
      class="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
      id="navigation"
    >
      <div
        class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto"
      >
        <a
          href="#"
          class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
        >
          <span>Home</span>
        </a>
        <a
          href="#"
          class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
        >
          <span>About</span>
        </a>
        <a
          href="#"
          class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
        >
          <span>Services</span>
        </a>
        <a
          href="#"
          class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
        >
          <span>Gallery</span>
        </a>
        <a
          href="#"
          class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
        >
          <span>Products</span>
        </a>
        <a
          href="#"
          class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
        >
          <span>Contact Us</span>
        </a>
      </div>
    </div>
  </nav>
</template>

<style>
nav {
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  height: 64px;
}
</style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      width: 1650,
    };
  },
  mounted() {
    window.addEventListener("resize", this.changeWidth);
    this.width = window.innerWidth;
  },
  destroyed() {
    window.removeEventListener("resize", this.changeWidth);
  },
  methods: {
    changeWidth() {
      this.width = window.innerWidth;
    },
  },
});
</script>
