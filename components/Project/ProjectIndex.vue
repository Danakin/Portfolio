<template>
  <section
    id="projects"
    class="bg-gray-200 py-12 w-full flex flex-row flex-wrap justify-evenly items-center"
  >
    <div class="w-full"><h2 class="text-2xl">Meine Projekte</h2></div>
    <ProjectCard
      url="https://agitated-minsky-91e9bd.netlify.app/"
      imgSrc="projects/spatz_sm.png"
    >
      <template #headline>SpatzInDerHand.de</template>
      <template #text>
        SpatzInDerHand steht für nachhaltige Videoproduktion. Gestützt wird das
        ganze durch jahrelange Industrie-Erfahrung
      </template>
    </ProjectCard>
    <ProjectCard
      url="http://www.mamenoki.ed.jp/"
      imgSrc="projects/mamenoki.png"
    >
      <template #headline>Mamenoki-Kindergarten Gehaltsrechner</template>
      <template #text
        >Die Anwendung berechnet das Gehalt der Erzieher*innen des Kindergartens
        anhand von Zeitkarten-Daten und dutzenden Bedingungen</template
      >
    </ProjectCard>
    <ProjectCard github="https://github.com/Danakin/LaravelBlog">
      <template #headline>Blog Software</template>
      <template #text>Eine eigens erstellte Blogging Plattform</template>
    </ProjectCard>
  </section>
</template>
