<template>
  <div class="service">
    {{ text }}
    <slot></slot>
  </div>
</template>

<style>
.service {
  border: 1px solid black;
}
</style>

<script>
export default {
  props: ["text"],
};
</script>
