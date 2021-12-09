<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Popover class="bg-white">
    <div class="px-4 sm:px-6 z-10">
      <div class="flex justify-between max-w-7xl mx-auto items-center border-b-2 border-gray-100 py-6 md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <router-link :to="{ name: routesNames.landing }">
            <span class="sr-only">Workflow</span>
            <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
          </router-link>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <PopoverButton
            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="sr-only">Open menu</span>
            <Menu :size="30" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden md:flex space-x-10">
          <router-link :to="routesNames.dogs" class="text-base font-medium text-gray-500 hover:text-gray-900">
            {{ $t('landing_page_layout.DOGS') }}
          </router-link>
          <router-link :to="{ name: routesNames.spaceflightNews }" class="text-base font-medium text-gray-500 hover:text-gray-900">
            {{ $t('landing_page_layout.SPACEFLIGHT_NEWS') }}
          </router-link>
        </PopoverGroup>
        <div class="hidden md:flex items-center justify-end">
          <router-link
            :to="{ name: routesNames.secret }"
            class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            {{ $t('landing_page_layout.SECRET_PLACE') }}
          </router-link>
        </div>
      </div>
    </div>

    <!-- Buger menu content  -->
    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel focus class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div>
                <router-link :to="{ name: routesNames.landing }">
                  <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                </router-link>
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span class="sr-only">Close menu</span>
                  <Close :size="30" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
          </div>
          <div class="py-6 px-5 space-y-6">
            <div class="grid grid-cols-2 gap-y-4 gap-x-8">
              <router-link :to="{ name: routesNames.dogs }" class="text-base font-medium text-gray-900 hover:text-gray-700">
                {{ $t('landing_page_layout.DOGS') }}
              </router-link>

              <router-link :to="{ name: routesNames.spaceflightNews }" class="text-base font-medium text-gray-900 hover:text-gray-700">
                {{ $t('landing_page_layout.SPACEFLIGHT_NEWS') }}
              </router-link>
            </div>
            <div>
              <router-link
                :to="{ name: routesNames.secret }"
                class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                {{ $t('landing_page_layout.SECRET_PLACE') }}
              </router-link>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script lang="ts" setup>
  import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
  import Menu from 'vue-material-design-icons/Menu.vue'
  import Close from 'vue-material-design-icons/Close.vue'

  import routesNames from '@/router/routesNames'
</script>
