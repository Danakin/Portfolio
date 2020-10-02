<i18n>
{
  "en": {
    "headline": "Our website uses cookies 🍪. Our cookies include:",
    "pref": "Save Language Preference",
    "traffic": "Traffic analysis (Google Analytics, opt-in)",
    "optin": "To accept or deny traffic analysis, click below.",
    "accept": "accept",
    "deny": "deny"
  },
  "de": {
    "headline": "Diese Website benutzt diese Cookies 🍪:",
    "pref": "Sprachpräferenz speichern",
    "traffic": "Traffic-Analyse mit Google Analytics (opt-in)",
    "optin": "Um Traffic-Analyse zu bestätigen oder abzulehnen klicken Sie bitte unten.",
    "accept": "Bestätigen",
    "deny": "Ablehnen"
  },
  "ja": {
    "headline": "本ウェブサイトはクッキーを利用している 🍪:",
    "pref": "言語設定を保存する",
    "traffic": "トラフィック分析 (グーグルAnalytics, opt-in)",
    "optin": "交通分析の可否については、以下をクリックしてください。",
    "accept": "賛成",
    "deny": "否定"
  }
}
</i18n>

<template>
  <div v-if="isOpen" class="fixed bottom-0 left-0 right-0 z-20 bg-indigo-300 p-8 flex flex-col">
      <div class="column is-8">
        <p class="font-bold">
          {{ $t("headline") }}
          <ul class="list-disc list-inside">
            <li>{{ $t("pref") }}</li>
            <li>{{ $t("traffic") }}</li>
          </ul>
          {{ $t("optin") }}
        </p>
      </div>
      <div class="flex w-full justify-center mt-2">
        <button class="px-4 py-2 mx-4 bg-green-500 border-2 border-green-700 uppercase" @click="accept">
          {{ $t("accept") }}
        </button>
        <button class="px-4 py-2 mx-4 bg-red-500 border-2 border-red-700 uppercase" @click="deny">
          {{ $t("deny") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CookieMessage",
  data() {
    return {
      isOpen: false,
    };
  },
  created() {
    if (!this.getGDPR() === true) {
      this.isOpen = true;
    }
  },
  methods: {
    getGDPR() {
      if (process.browser) {
        return localStorage.getItem("GDPR:accepted");
      }
    },
    accept() {
      if (process.browser) {
        this.isOpen = false;
        localStorage.setItem("GDPR:accepted", "yes");
        this.$ga.enable();
        this.$ga.page(this.$route.fullPath);
      }
    },
    deny() {
      if (process.browser) {
        this.isOpen = false;
        localStorage.setItem("GDPR:accepted", "no");
        this.$ga.disable();
      }
    },
  },
};
</script>
