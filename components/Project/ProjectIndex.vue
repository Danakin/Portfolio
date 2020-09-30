<i18n>
{
  "en": {
    "headline": "Projects",
    "sparrow": {
      "headline": "SpatzInDerHand.de",
      "text": "SpatzInDerHand stands for sustainable video production. The owner has accumulated years of industry experience before concentrating on going climate neutral"
    },
    "mamenoki": {
      "headline": "Mamenoki-Kindergarten Salary Calculator",
      "text": "This application takes into account dozens of conditions to calculate the salary of the kindergartens teachers."
    },
    "laravelblog": {
      "headline": "Laravel Blog Software",
      "text": "Custom made Laravel 8 Blogging software"
    }
  },
  "de": {
    "headline": "Projekte",
    "sparrow": {
      "headline": "SpatzInDerHand.de",
      "text": "SpatzInDerHand steht für nachhaltige Videoproduktion. Gestützt wird das ganze durch jahrelange Industrie-Erfahrung"
    },
    "mamenoki": {
      "headline": "Mamenoki-Kindergarten Gehaltsrechner",
      "text": "Die Anwendung berechnet das Gehalt der Erzieher*innen des Kindergartens anhand von Zeitkarten-Daten und dutzenden Bedingungen"
    },
    "laravelblog": {
      "headline": "Laravel Blog Software",
      "text": "Eine eigens erstellte Blogging Plattform in Laravel 8 und PHP 7"
    }
  },
  "ja": {
    "headline": "過去プロジェクト一覧",
        "sparrow": {
      "headline": "SpatzInDerHand.de",
      "text": "SpatzInDerHandの動画作成の中心はサステナビリティである。 オーナーは長年の業界経験を積んできた後、気候の中立性を重視しています。"
    },
    "mamenoki": {
      "headline": "まめの木保育園 給料計算ソフト",
      "text": "保育園の先生の給料を計算するための数十の条件を考慮するアプリである。"
    },
    "laravelblog": {
      "headline": "Laravelブログソフト",
      "text": "Laravel 8で作ったブログソフト。"
    }
  }
}
</i18n>

<template>
  <section
    id="projects"
    class="bg-gray-200 py-16 w-full flex flex-row flex-wrap justify-evenly items-center"
  >
    <div class="w-full">
      <h2 class="text-2xl">{{ $t("headline") }}</h2>
    </div>
    <ProjectCard
      url="https://agitated-minsky-91e9bd.netlify.app/"
      imgSrc="projects/spatz_sm.png"
    >
      <template #headline>{{ $t("sparrow.headline") }}</template>
      <template #text>{{ $t("sparrow.text") }}</template>
    </ProjectCard>
    <ProjectCard
      url="http://www.mamenoki.ed.jp/"
      imgSrc="projects/mamenoki.png"
    >
      <template #headline>{{ $t("mamenoki.headline") }}</template>
      <template #text>{{ $t("mamenoki.text") }}</template>
    </ProjectCard>
    <ProjectCard github="https://github.com/Danakin/LaravelBlog">
      <template #headline>{{ $t("laravelblog.headline") }}</template>
      <template #text>{{ $t("laravelblog.text") }}</template>
    </ProjectCard>
  </section>
</template>
