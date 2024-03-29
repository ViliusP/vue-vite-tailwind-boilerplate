<template>
  <Listbox v-model="currentLocale">
    <div class="relative mt-1 inline-block">
      <ListboxButton
        class="relative py-2 pl-3 pr-12 text-left bg-white rounded-lg shadow-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 text-lg"
      >
        <span class="block truncate">{{ currentLocale.toUpperCase() }}</span>
        <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <ChevronDown :size="25" class="fill-current text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions
          class="absolute mt-1 overflow-auto bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none text-lg"
        >
          <ListboxOption
            v-for="locale in $i18n.availableLocales"
            v-slot="{ active, selected }"
            :key="`locale-${locale}`"
            :value="locale"
            as="template"
          >
            <div :class="[active ? 'text-green-900 bg-green-100' : 'text-gray-900', 'select-none relative py-3 pl-10 pr-4 cursor-pointer']">
              <span :class="[selected ? 'font-medium' : 'font-normal', 'block truncate']">{{ locale.toUpperCase() }}</span>
              <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3 fill-current text-green-600">
                <Check :size="25" aria-hidden="true" />
              </span>
            </div>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script lang="ts">
  import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
  import Check from 'vue-material-design-icons/Check.vue'
  import ChevronDown from 'vue-material-design-icons/ChevronDown.vue'
  import { useI18n } from 'vue-i18n'

  export default {
    components: {
      Listbox,
      ListboxButton,
      ListboxOptions,
      ListboxOption,
      Check,
      ChevronDown
    },

    setup() {
      const { locale } = useI18n()

      const currentLocale = locale

      return {
        currentLocale
      }
    }
  }
</script>
