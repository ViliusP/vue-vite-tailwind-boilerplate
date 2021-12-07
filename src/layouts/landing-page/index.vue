<template>
  <AppBar id="appbar" />
  <!-- </intersect> -->
  <slot />
  <Footer />
</template>

<script setup lang="ts">
import AppBar from './AppBar.vue'
import Footer from './Footer.vue'
</script>

<style></style>
