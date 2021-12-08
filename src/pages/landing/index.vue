<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <main
    class="overflow-hidden z-10 mx-auto w-auto mt-10 px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex items-center justify-center"
  >
    <div class="sm:text-center lg:text-left">
      <p class="text-2xl font-medium pb-1">{{ $t('landing_page.LANGUAGE') }}</p>
      <LanguageListBox class="pb-10" />

      <h1
        class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
      >
        Vue3 + Vite + Pinia + {{ $t('landing_page.MORE') }}
      </h1>
      <p
        class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
      >
        {{ $t('landing_page.ABOUT') }}
      </p>

      <div class="text-center mt-24 text-gray-900 font-medium">
        <div class="">*Everything above will be in English</div>
        <div class="text-5xl md:text-6xl">Feature/Libraries</div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
        <FeatureVue3 />
        <FeatureVue3 />
        <FeatureVue3 />
        <FeatureVue3 />
        <FeatureVue3 />
        <FeatureVue3 />
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import LanguageListBox from '@/components/LanguageListBox.vue'
import FeatureVue3 from './FeatureVue3.vue'
</script>
