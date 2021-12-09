<template>
  <transition name="between-layout-fade" mode="out-in">
    <component :is="layout">
      <router-view v-slot="{ Component, route }">
        <transition name="in-layout-fade" mode="out-in">
          <component :is="Component" :key="route.path"></component>
        </transition>
      </router-view>
    </component>
  </transition>
</template>

<script setup lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

  import { computed } from '@vue/reactivity'
  import { useRoute } from 'vue-router'

  const defaultLayout = 'landing-page'
  const setupRoute = useRoute()

  const layout = computed(() => `${setupRoute.meta.layout || defaultLayout}-layout`)
</script>

<style>
  .in-layout-fade-enter-active,
  .in-layout-fade-leave-active {
    transition: opacity 0.25s ease;
  }

  .in-layout-fade-enter-from,
  .in-layout-fade-leave-to {
    opacity: 0;
  }

  .between-layout-fade-enter-active,
  .between-layout-fade-leave-active {
    transition: opacity 0.075s ease;
  }

  .between-layout-fade-enter-from,
  .between-layout-fade-leave-to {
    opacity: 0;
  }
</style>
