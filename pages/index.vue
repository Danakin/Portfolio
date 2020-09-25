<template>
  <section class="content">
    <HeroDisplay imgSrc="@/assets/imgs/heromain.jpg">
      <h1>Moderne Homepages nach Maß.</h1>
      <h2>Deutsch, Englisch und Japanisch.</h2>
      <h2>Interkulturell.</h2>
    </HeroDisplay>
    <section class="container">
      <ServiceOverview></ServiceOverview>
      <ContactForm></ContactForm>
    </section>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.content {
  margin-top: 64px;
}

.container {
  position: relative;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
