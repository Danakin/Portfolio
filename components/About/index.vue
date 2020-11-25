<i18n>
{
  "en": {
    "headline": "About Brücke Nagasaki",
    "p1": "Brücke creates modern <strong>Fullstack Applications</strong> that are fast, responsive and beautiful. I use <strong><em>Laravel</em></strong> or <strong><em>Node.js</em></strong> to deliver scalable and robust Backend-Solutions. For Frontend-Applications I use <strong><em>Vue.js</em></strong> (or <strong><em>Nuxt.js</em></strong>).",
    "p2": "My name is Danny Festor. I'm a German freelancer from the <strong>Ruhr Area</strong>, but since 2016 i live in <strong>Nagasaki, Japan</strong>. I'm interested in anything technical and dabble in programming since my youth, later in University and in the Industry.",
    "p3": "After years of working in japanese Companies I decied 2020 to go freelance to be closer to my family. <strong>Communication</strong> is the strong suit of many japanese companies, and I am keeping this habit. <em>I think communication between client and freelancer is an important tool to strengthen trust.</em>",
    "p4": "I can speak <strong>German</strong> (Native), <strong>English</strong> (Fluent) and <strong>Japanese</strong> (Advanced).",
    "p5": "In case I'm not programming you can see me carrying my camera around, sitting on my trusted bicycle, or hiking Nagasaki's beautiful nature."
  },
  "de": {
    "headline": "Über Brücke Nagasaki",
    "p1": "In der <strong>Fullstack-Entwicklung</strong> erstellt Brücke moderne, schnelle und schöne Homepages nach Maß. Ich nutze <strong><em>Laravel</em></strong> oder <strong><em>Node.js</em></strong>, um robuste und skalierbare Backend-Lösungen zu liefern. Für Frontend-Anwendungen verwende <strong><em>Vue.js</em></strong> (oder <strong><em>Nuxt.js</em></strong>).",
    "p2": "Ich heiße Danny Festor. Ich komme ursprünglich aus dem <strong>Ruhrgebiet</strong>, lebe aber mit meiner Familie seit 2016 in <strong>Nagasaki, Japan</strong>. Ich interessiere mich für Technik und programmiere selbst seit meiner Jugend, später im Studium und in Unternehmen.",
    "p3": "Nach jahrelanger Industrie-Erfahrung in japanischen Unternehmen habe ich 2020 beschlossen mich selbstständig zu machen, um näher an der Familie zu sein. <strong>Kommunikation</strong> steht bei japanischen Unternehmen im Vordergrund, und diese Gewohnheit behalte ich bei. <em>Die Kommunikation zwischen Freiberufler und Auftraggeber ist meiner Meinung nach besonders wichtig, um gegenseitiges Vertrauen zu stärken.</em>",
    "p4": "Ich spreche <strong>Deutsch</strong> (Muttersprache), <strong>Englisch</strong> (Fließend) und <strong>Japanisch</strong> (Verhandlungssicher).",
    "p5": "Wenn ich nicht programmiere bin ich mit meiner Kamera unterwegs, sitze auf dem Fahrrad, oder wandere durch wunderschönen Gegenden und Berge von Nagasaki."
  },
  "ja": {
    "headline": "ブリュッケ長崎について",
    "p1": "In der <strong>Fullstack-Entwicklung</strong> erstellt Brücke moderne, schnelle und schöne Homepages nach Maß. Ich nutze <strong><em>Laravel</em></strong> oder <strong><em>Node.js</em></strong>, um robuste und skalierbare Backend-Lösungen zu liefern. Für Frontend-Anwendungen verwende <strong><em>Vue.js</em></strong> (oder <strong><em>Nuxt.js</em></strong>)",
    "p2": "Ich heiße Danny Festor. Ich komme ursprünglich aus dem <strong>Ruhrgebiet</strong>, lebe aber mit meiner Familie seit 2016 in <strong>Nagasaki, Japan</strong>. Ich interessiere mich für Technik und programmiere selbst seit meiner Jugend, später im Studium und in Unternehmen.",
    "p3": "Nach jahrelanger Industrie-Erfahrung in japanischen Unternehmen habe ich 2020 beschlossen mich selbstständig zu machen, um näher an der Familie zu sein. <strong>Kommunikation</strong> steht bei japanischen Unternehmen im Vordergrund, und diese Gewohnheit behalte ich bei. <em>Die Kommunikation zwischen Freiberufler und Auftraggeber ist meiner Meinung nach besonders wichtig, um gegenseitiges Vertrauen zu stärken.</em>",
    "p4": "Ich spreche <strong>Deutsch</strong> (Muttersprache), <strong>Englisch</strong> (Fließend) und <strong>Japanisch</strong> (Verhandlungssicher).",
    "p5": "Wenn ich nicht programmiere bin ich mit meiner Kamera unterwegs, sitze auf dem Fahrrad, oder wandere durch die Berge."
  }
}
</i18n>

<template>
  <section id="about" class="w-full flex justify-center relative bg-gray-200">
    <div class="container flex flex-wrap justify-end relative py-16">
      <h2 class="w-full relative text-2xl mb-4">
        {{ $t("headline") }}
      </h2>
      <article
        class="absolute flex justify-center items-center mt-10 md:mt-0 w-full md:relative md:w-5/12"
      >
        <img
          id="introduction-image"
          class="w-full md:w-auto h-auto"
          src="~/assets/imgs/danny_sm.jpg"
        />
      </article>
      <article
        class="w-full md:w-7/12 text-left bg-gray-200 bg-opacity-75 md:bg-none relative p-8 md:py-0"
      >
        <p v-html="$t('p1')"></p>
        <p v-html="$t('p2')"></p>
        <p v-html="$t('p3')"></p>
        <p v-html="$t('p4')"></p>
        <p v-html="$t('p5')"></p>
      </article>
    </div>
  </section>
</template>

<style scoped>
p {
  @apply my-2 text-justify;
}

@media (min-width: 768px) {
  p {
    @apply my-4;
  }

  #introduction-image {
    max-height: 427px;
    max-width: 320px;
  }
}
</style>
