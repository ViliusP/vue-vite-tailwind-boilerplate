<template>
  <button
    :class="[...colorClasses, 'tailwind-button--outlined']"
    :style="[{ ...colorStyles }]"
    class="p-2 rounded-lg text-base"
  >
    <slot />
  </button>
</template>
<script lang="ts">
  import { makeColorProps, useColor } from '@/composables/color'
  import { defineComponent } from '@vue/runtime-core'
  import { computed, unref } from 'vue'

  export default defineComponent({
    props: {
      // Button can take color as prop
      // Color prop can be type of tailwind color (e.g bg-white-100, text-red-50, bg-blue and etc.)
      // Color also can be css color like rgb(85,85,85) or #FFAA15
      ...makeColorProps()
    },
    setup(props) {
      const { colorClasses, colorStyles } = useColor(
        computed(() => {
          const { color } = unref(props)
          return {
            text: color
          }
        })
      )

      return {
        colorClasses,
        colorStyles
      }
    }
  })
</script>
<style>
  .tailwind-button--outlined {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    position: relative;
    @apply tracking-wider;
    @apply uppercase;
    @apply justify-center;
    @apply font-medium;
    @apply focus:outline-none;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: thin solid currentColor;
    background-color: transparent;
  }

  .tailwind-button--outlined::before {
    bottom: 0;
    color: inherit;
    content: '';
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    background-color: currentColor;
    border-radius: inherit;
    text-decoration: inherit;
    box-sizing: inherit;
  }
  .tailwind-button--outlined:hover::before {
    opacity: 0.08;
  }
</style>
