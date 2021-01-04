<i18n>
{
  "en": {
    "headline": "Projects",
    "sparrow": {
      "headline": "SpatzInDerHand.de",
      "text": "SpatzInDerHand stands for sustainable video production. The owner has accumulated years of industry experience before concentrating on going climate neutral"
    },
    "brueckecms": {
      "headline": "BrueckeCMS",
      "text": "This will become a small Laravel powered Wordpress clone. Obviously a fresh CMS can't hope to match Wordpresses functionality, but for users who only need base functionality this will become an alternative"
    },
    "ekistamp": {
      "headline": "Ekistamp Station-Stamp-Collection",
      "text": "The japanese People love collecting things. Nearly every Japan Railways station has a commemorative stamp to celebrate one's visiting the station. This application works as a small social network for stamp collectors."
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
    "brueckecms": {
      "headline": "BrückeCMS",
      "text": "Dieses Projekt zielt darauf ab irgendwann ein kleiner Wordpress-Klon zu werden. Natürlich sind neue Solo-Projekte nicht in der Lage mit dem Vorbild mitzuhalten, aber dieses Projekt wird irgendwann einfach Befürdnisse befriedigen können."
    },
    "ekistamp": {
      "headline": "Ekistamp Bahnhof-Stempel-Sammlung",
      "text": "Japaner lieben das Sammeln. Fast jeder Bahnhof der Japan Rails hat einen eigenen Stempel, mit dem man das Besuchen des Bahnhofs feiern kann. Diese Anwendung ist ein kleines Soziales Netzwerk für Sammler dieser Stempel."
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
    "brueckecms": {
      "headline": "ブリュッケCMS",
      "text": "小さなワードプレスのクローンになるアプリです。本アプリはもちろん、ワードプレスの機能のライバルになれませんが、ワードプレスはパワフルすぎる場合に使えるアプリになる予定です。"
    },
    "ekistamp": {
      "headline": "駅スタンプSNS",
      "text": "人間が物を集めることが好きです. JRの各駅は記念スタンプがあるので、集める人もいます。本サイトはスタンプを集める人のためのSNSになります。"
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
    class="bg-gray-200 py-16 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 content-center justify-center"
  >
    <div class="md:col-span-2 xl:col-span-3">
      <h2 class="text-2xl">{{ $t("headline") }}</h2>
    </div>
    <ProjectCard
      url="https://spatzinderhand.netlify.app/"
      imgSrc="projects/spatz_sm.png"
      :technologies="['vuejs', 'nuxtjs', 'tailwindcss']"
    >
      <template #headline>{{ $t("sparrow.headline") }}</template>
      <template #text>{{ $t("sparrow.text") }}</template>
    </ProjectCard>
    <ProjectCard
      url="https://brueckecms.herokuapp.com/"
      imgSrc="projects/brueckecms.png"
      github="https://github.com/Danakin/BrueckeCMS"
      :technologies="[
        'Laravel',
        'Livewire',
        'PostgreSQL',
        'TailwindCSS',
        'AlpineJS',
      ]"
    >
      <template #headline>{{ $t("brueckecms.headline") }}</template>
      <template #text>{{ $t("brueckecms.text") }}</template>
    </ProjectCard>
    <ProjectCard
      url="https://ekistamp.herokuapp.com/"
      imgSrc="projects/ekistamp.png"
      github="https://github.com/Danakin/Ekistamp"
      :technologies="[
        'Laravel',
        'Livewire',
        'PostgreSQL',
        'TailwindCSS',
        'AlpineJS',
      ]"
    >
      <template #headline>{{ $t("ekistamp.headline") }}</template>
      <template #text>{{ $t("ekistamp.text") }}</template>
    </ProjectCard>
    <ProjectCard
      url="http://www.mamenoki.ed.jp/"
      imgSrc="projects/mamenoki.png"
      :technologies="[
        'Electron.js',
        'Vue.js',
        'SQLite',
        'TailwindCSS',
        'Sequelize',
      ]"
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
