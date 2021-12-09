<template>
  <FeatureContainer
    title="Vite"
    subtitle="Next Generation Frontend Tooling"
    docsUrl="https://vitejs.dev/"
  >
    <div>
      Vite works by treating your source code and your dependencies differently.
      Unlike your source code, dependencies don't change nearly as often during
      development. Vite takes advantage of this fact by pre-bundling your
      dependencies using esbuild. Esbuild is a JS bundler written in Go that
      bundles dependencies 10-100x faster than JavaScript based alternatives
      like Webpack and Parcel. It then serves your source code over native ES
      Modules, or ESM, which allows the browser to handle the actual bundling.
      Finally, Vite supports HMR, which ensures only the relevant modules are
      replaced when a file is edited instead of rebuilding the entire bundle,
      which triggers a page reload and resets state. Unlike other bundlers, Vite
      performs HMR over native ES Modules which means it only needs to
      invalidate affected modules when a file is edited. This ensures that
      update times are consistently fast instead of scaling linearly as your
      application grows.
    </div>
  </FeatureContainer>
</template>
<script setup lang="ts">
import FeatureContainer from './FeatureContainer.vue'
</script>
<style lang=""></style>
