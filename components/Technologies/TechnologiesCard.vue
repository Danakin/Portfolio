<template>
  <div class="technologycard">
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title><slot name="title">Icon Title</slot></title>
      <slot name="path"></slot>
    </svg>
  </div>
</template>

<style>
.technologycard {
  max-width: 300px;
}
</style>
