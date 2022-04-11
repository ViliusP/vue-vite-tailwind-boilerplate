<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <main
    class="overflow-hidden z-10 mx-auto w-auto mt-10 px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-0 xl:mt-28 flex items-center justify-center"
  >
    <div class="sm:text-center lg:text-left">
      <p class="text-2xl font-medium pb-1">{{ $t('landing_page.LANGUAGE') }}</p>
      <LanguageListBox class="pb-10" />

      <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        Vue3 + Vite + Pinia + {{ $t('landing_page.MORE') }}
      </h1>
      <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
        {{ $t('landing_page.ABOUT') }}
      </p>

      <div class="text-center mt-24 text-gray-900 font-medium">
        <div class="">*Everything above will be in English</div>
        <div class="text-5xl md:text-6xl">Feature/Libraries</div>
      </div>

      <iframe
        class="block mx-auto py-4"
        width="600"
        height="338"
        src="https://www.youtube-nocookie.com/embed/WLpLYhnGqPA"
        title="YouTube video player"
        frameborder="0"
        allow="clipboard-write; encrypted-media;"
        allowfullscreen
      ></iframe>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 py-10">
        <FeatureVue3 class="col-span-4" />
        <FeatureVite class="col-span-8" />
        <FeaturePinia class="col-span-6" />
        <FeatureTypescript class="col-span-6" />
        <FeatureTailwind class="col-span-6" />
        <FeatureLocalization class="col-span-6" />
        <FeatureEslint class="col-span-6" />
        <FeatureMore class="col-span-6" />
      </div>
      <div class="text-center mt-10 text-gray-900 font-medium">
        <div class="text-4xl md:text-5xl">Recommended tools</div>
      </div>
      <div class="text-center text-2xl mt-5 mb-10">
        <a href="https://code.visualstudio.com/">Visual Studio Code</a>
        <br />
        <a href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss"> Tailwind CSS IntelliSense </a>
        <br />
        <a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"> Prettier - Code formatter </a>
        <br />
        <a href="https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar"> Vue Language Features (Volar) </a>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
  import LanguageListBox from '@/components/LanguageListBox.vue'
  import FeatureVue3 from './FeatureVue3.vue'
  import FeatureVite from './FeatureVite.vue'
  import FeaturePinia from './FeaturePinia.vue'
  import FeatureTypescript from './FeatureTypescript.vue'
  import FeatureTailwind from './FeatureTailwind.vue'
  import FeatureLocalization from './FeatureLocalization.vue'
  import FeatureEslint from './FeatureEslint.vue'
  import FeatureMore from './FeatureMore.vue'
</script>
