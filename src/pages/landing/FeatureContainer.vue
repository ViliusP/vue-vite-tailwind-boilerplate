<template>
  <a
    target="_blank"
    :href="props.docsUrl"
    :class="[
      props.docsUrl &&
        'hover:bg-indigo-300 transition duration-150 ease-in-out',
      'flex items-center justify-center rounded-md flex-col bg-gray-100 py-10  shadow-sm'
    ]"
  >
    <div
      class="leading-6 font-bold text-gray-900 text-center px-10 py-2 prose prose-2xl"
    >
      {{ props.title }}
      <div class="leading-5 prose-lg text-gray-800 pt-1 px-2">
        {{ props.subtitle }}
      </div>
    </div>
    <div class="py-2 text-gray-700 prose-lg px-10 text-left leading-7">
      <slot />
    </div>
  </a>
</template>
<script setup lang="ts">
const props = defineProps<{
  docsUrl?: string
  title: string
  subtitle?: string
}>()
</script>
<style lang=""></style>
