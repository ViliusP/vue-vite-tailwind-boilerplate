<template>
  <FeatureContainer
    title="Vue3"
    subtitle="The Progressive JavaScript Framework"
    docsUrl="https://v3.vuejs.org/"
  >
    <div>
      Vue 3 is a complete rewrite of the framework. It comes with even better
      performance, better tree-shaking, smaller size, improved TypeScript
      support, and some revolutionary new features for developing large-scale
      enterprise software.
    </div>
    <div>
      This project uses SFC <br />
      <a href="https://v3.vuejs.org/api/sfc-script-setup.html#basic-syntax"
        ><code
          class="font-bold bg-gray-200 px-1 py-2 hover:bg-gray-300 rounded-sm"
        >
          {{ `
          <script setup></script>
          `}}
        </code>
      </a>
      compile-time syntactic sugar, but feel free to use new composition API or
      options API.
    </div>
  </FeatureContainer>
</template>
<script setup lang="ts">
  import FeatureContainer from './FeatureContainer.vue'
</script>
<style lang=""></style>
