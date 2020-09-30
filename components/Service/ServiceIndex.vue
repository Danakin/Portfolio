<i18n>
{
  "en": {
    "responsive": {
      "headline": "Responsive",
      "content": "My homepages are 100% responsive and work everywhere: be it Smartphone, Tablet or Desktop."
    },
    "fast": {
      "headline": "Fast",
      "content": "Modern web technologies guarantee fast-loading, secure websites."
    },
    "pretty": {
      "headline": "Beautiful",
      "content": "Modern looking websites that follow newest design trends for your brand."
    }
  },
  "de": {
    "responsive": {
      "headline": "Responsive",
      "content": "Meine Seiten sind 100% responsive, und fuktionieren sowohl auf dem Smartphone, als auch auf dem Tablet und PC."
    },
    "fast": {
      "headline": "Schnell",
      "content": "Der Einsatz moderner Web-Technologien garantiert schnelles und sicheres Laden Ihrer Webseite."
    },
    "pretty": {
      "headline": "Schön",
      "content": "Modern aussehende Webseiten die Ihre Marke repräsentieren und neuesten Design-Trends folgen."
    }
  },
  "ja": {
    "responsive": {
      "headline": "レスポンシブ",
      "content": "私がホームページは100％レスポンシブであり、スマホでも、タブレットでも、デスクトップでもどこでも動作します"
    },
    "fast": {
      "headline": "高速",
      "content": "最新のウェブ技術を利用し、ホームページの読み込みが早くて、安全である"
    },
    "pretty": {
      "headline": "綺麗",
      "content": "最新デザイントレンドを従ったあなたのブランドにピッタリなデザイン"
    }
  }
}
</i18n>

<template>
  <div
    id="services"
    class="container mx-auto w-full flex flex-row justify-center content-center flex-wrap relative py-16 bg-white"
  >
    <ServiceView text="">
      <template #headline>{{ $t("responsive.headline") }}</template>
      <template #content>{{ $t("responsive.content") }}</template>
    </ServiceView>
    <ServiceView>
      <template #headline>{{ $t("fast.headline") }}</template>
      <template #content>{{ $t("fast.content") }}</template>
    </ServiceView>
    <ServiceView text="Beautiful">
      <template #headline>{{ $t("pretty.headline") }}</template>
      <template #content>{{ $t("pretty.content") }}</template>
    </ServiceView>
  </div>
</template>

<style>
</style>
