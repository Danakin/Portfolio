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
    <h2 class="w-full text-2xl font-bold">Services</h2>

    <a href="#contact" class="w-full md:w-1/2 lg:w-1/3 p-2">
      <div class="shadow rounded">
        <strong class="text-2xl">Ihr Traumprojekt</strong>
        <p>
          Sie haben eine Idee, und eine Vorstellung was die Umsetzung betrifft?
          Kontaktieren Sie mich, um einen individuellen Kostenvoranschlag
          passend zu ihrem Budget und Projekt zu erhalten.
        </p>
        <em>Kostenvoranschläge sind grundsätzlich detailliert und fair.</em>
      </div>
    </a>

    <a href="#contact" class="w-full md:w-1/2 lg:w-1/3 p-2">
      <div class="shadow rounded">
        <strong class="text-2xl">Kostenlose Beratung</strong>
        <p>
          Sie wissen nicht, wie Sie ihre Idee umsetzen sollen? Ich berate Sie
          gerne und empfehle Ihnen, mit welchen Technologien Ihr Projekt am
          besten Umgesetzt werden kann.
        </p>
        <em>
          Die erste Stunde ist kostenlos. Beratung möglich über Skype, Zoom,
          Discord oder was für Sie am Besten ist.
        </em>
      </div>
    </a>

    <a href="#contact" class="w-full md:w-1/2 lg:w-1/3 p-2">
      <div class="shadow rounded">
        <strong class="text-2xl">Zukunftssicher</strong>
        <p>
          Ihr Projekt ist fertig, aber sie machen sich Sorgen um die
          Langfristigkeit? Wer kümmert sich um Sicherupdates, und dass alles wie
          geschmiert läuft?
        </p>
        <em>
          Kontaktieren Sie mich um einen individuellen Wartungsvertrag zu
          diskutieren!
        </em>
      </div>
    </a>

    <h2 class="w-full text-2xl font-bold mt-4">Webseiten von Bruecke sind</h2>

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
