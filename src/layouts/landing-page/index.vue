<template>
  <AppBar id="appbar" />
  <!-- </intersect> -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6"><slot /></div>
  <Footer />
</template>

<script setup lang="ts">
import Footer from './Footer.vue'
import AppBar from './AppBar.vue'
</script>

<style></style>
