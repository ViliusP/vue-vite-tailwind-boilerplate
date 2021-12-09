<template>
  <FeatureContainer
    title="Localization"
    subtitle="with vue-i18n"
    docsUrl="https://vue-i18n.intlify.dev/"
  >
    <div>
      <span class="font-bold">Vue I18n</span> is internationalization plugin for
      Vue.js. Currently project has 3 languages: EN, ES, LT. If you want more
      languages, add .json file to
      <code class="font-bold bg-gray-200 px-1 py-2 rounded-sm"
        >src/locales</code
      >
      and fill with all needed translations. Then add your new language to
      <code class="font-bold bg-gray-200 px-1 py-2 rounded-sm"
        >src/plugins/i18n.ts</code
      >
    </div>
  </FeatureContainer>
</template>
<script setup lang="ts">
import FeatureContainer from './FeatureContainer.vue'
</script>
<style lang=""></style>
