<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <AppBar class="" id="appbar" />
    <div class="px-4 mx-auto max-w-7xl sm:px-6 flex-grow">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from './Footer.vue'
import AppBar from './AppBar.vue'
</script>

<style></style>
