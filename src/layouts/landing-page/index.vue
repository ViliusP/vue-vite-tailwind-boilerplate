<template>
  <AppBar id="appbar" />
  <!-- </intersect> -->
  <div class="max-w-7xl mx-auto z-0"><slot /></div>
  <Footer />
</template>

<script setup lang="ts">
import Footer from './Footer.vue'
import AppBar from './AppBar.vue'
</script>

<style></style>
