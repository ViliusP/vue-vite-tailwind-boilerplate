<template>
  <a
    target="_blank"
    :href="props.docsUrl"
    class="flex items-center justify-center rounded-md flex-col bg-gray-100 py-10 hover:bg-indigo-300 transition duration-150 ease-in-out shadow-sm"
  >
    <div class="leading-6 font-medium text-gray-900 py-2 prose prose-2xl">
      {{ props.name }}
    </div>
    <div class="py-2 text-gray-700 prose-lg text-center px-10 leading-7">
      <slot />
    </div>
  </a>
</template>
<script setup lang="ts">
const props = defineProps<{
  docsUrl: string
  name: string
}>()
</script>
<style lang=""></style>
