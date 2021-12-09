<template>
  <FeatureContainer
    title="Pinia"
    subtitle="The Vue Store that you will enjoy using"
    docsUrl="https://pinia.esm.dev/"
  >
    <div>
      According to the creator of Pinia (Eduardo San Martin Morote), who is also
      part of the Vue.js core team and actively participates in the design of
      Vuex, Pinia and Vuex have more similarities than differences:
      <span class="italic">
        Pinia tries to stay as close to Vuex’s philosophy as possible. It was
        designed to test out a proposal for the next iteration of Vuex and it
        was a success as we currently have an open RFC for Vuex 5 with an API
        very similar to the one used by Pinia. My personal intention with this
        project is to redesign the experience of using a global Store while
        keeping the approachable philosophy of Vue. I keep the API of Pinia as
        close as Vuex as it keeps moving forward to make it easy for people to
        migrate to Vuex or to even fusion both projects (under Vuex) in the
        future.
      </span>
    </div>
    <div class="italic">
      <span class="not-italic font-bold">Evan You (Creator of Vue):</span>
      Pinia is the next iteration of Vuex. It started out as Eduardo's (who is a
      core team member and maintainer of the router) personal project to test
      out the ideas we have been discussing for the next version of Vuex. As he
      invested more efforts into it, it is turning out to be pretty much what we
      wanted for Vuex 5. If you take a look at Pinia's docs, you will find that
      the API is very similar to Vuex, except simpler, with better Composition
      API integration, and better TypeScript support (the biggest pain point for
      Vuex 4 and below). Note these recommendations are for new projects. If you
      are currently using Vuex, you will be able to read Pinia code very easily,
      but there's no need to migrate to Pinia unless you desperately want better
      TS support.
    </div>
  </FeatureContainer>
</template>
<script setup lang="ts">
import FeatureContainer from './FeatureContainer.vue'
</script>
<style lang=""></style>
