<i18n>
{
  "en": {
    "headline": "Newest Blog Entries"
  },
  "de": {
    "headline": "Neueste Beiträge im Blog"
  },
  "ja": {
    "headline": "最新のブログエントリー"
  }
}
</i18n>

<template>
  <section id="blogs" class="py-16 bg-gray-200 w-full">
    <section class="w-full">
      <nuxt-link to="blog" class="text-2xl">{{ $t("headline") }}</nuxt-link>
    </section>
    <section
      class="container mx-auto flex flex-row flex-wrap w-full justify-evenly"
    >
      <BlogOverview
        v-for="article in articles"
        :key="article.slug"
        :article="article"
      ></BlogOverview>
    </section>
    <section class="mt-16" v-if="!success && !error">
      <p>
        <span class="font-bold text-lg">Newsletter</span>
        <span class="text-lg">(English)</span>
      </p>
      <p>Subscribe to my Newsletter to be informed of new posts</p>
      <form
        @submit.prevent="submitForm"
        class="mt-4 flex flex-col"
        name="newsletter"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <div class="hidden" aria-hidden="true">
          <label for="bot-field">Don't fill this out if you are human:</label>
          <input type="text" name="bot-field" id="bot-field" />
        </div>
        <div>
          <label for="email">E-mail:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            v-model="email"
            required
          />
        </div>
        <div class="mt-4">
          <button
            class="bg-blue-600 hover:bg-blue-200 px-4 py-2 text-white rounded"
            type="submit"
          >
            Subscribe
          </button>
        </div>
      </form>
    </section>
    <section class="mt-16 max-w-2xl mx-auto px-4">
      <article class="bg-green-200 border-l-4 border-green-600 p-2">
        Almost there! Check your inbox to confirm your E-mail address!
      </article>
    </section>
    <section class="mt-16 max-w-2xl mx-auto px-4">
      <article class="bg-red-200 border-l-4 border-red-600 p-2">
        Something went wrong... {{ error_message }}
      </article>
    </section>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["articles"],
  data() {
    return {
      email: "",
      success: false,
      error: false,
      error_message: ""
    };
  },
  methods: {
    submitForm() {
      this.$axios
        .post("/", { email: this.email })
        .then(() => {
          this.success = true;
        })
        .catch(error => {
          this.error = true;
          this.error_message = error;
        });
    }
  }
});
</script>
