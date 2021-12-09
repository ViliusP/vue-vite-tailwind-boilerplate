<template>
  <FeatureContainer title="And others">
    <div class="pt-6" id="VeeValidate">
      <a
        class="font-bold underline"
        href="https://vee-validate.logaretm.com/v4/"
      >
        VeeValidate - Form Validation for Vue.js</a
      >

      <form class="flex flex-col justify-items-center pt-2" @submit="onSubmit">
        <!-- Globally registered in main.ts -->
        <text-field
          :placeHolder="$t('landing_page.EMAIL')"
          :label="$t('landing_page.EMAIL')"
          v-model="exampleEmail"
          :error="exampleEmailError"
        ></text-field>
        <text-field
          class="pb-2"
          :label="$t('landing_page.NUMBER')"
          :placeHolder="$t('landing_page.NUMBER')"
          v-model="exampleNumber"
          :error="exampleNumberError"
        ></text-field>
        <!-- Globally registered in main.ts -->
        <outlined-button color="bg-indigo-500"
          >Submit (check console)</outlined-button
        >
      </form>
    </div>
    <div class="pt-6" id="MaterialDesignIcons">
      <a
        class="font-bold underline"
        href="https://github.com/robcresswell/vue-material-design-icons"
      >
        Material design icons
      </a>
      <div class="flex items-center pt-2">
        <ArmFlex fillColor="#FFAA15" size="50" />
        <ArmFlex fillColor="#FF0015" size="40" />
        <ArmFlex size="30" />
        <AccountCircle size="50" />
        <AccountCircleOutline size="50" />
        <Reload class="animate-spin" size="50" />
      </div>
    </div>

    <div class="pt-6" id="Vue Router">
      <a class="font-bold underline" href="https://next.router.vuejs.org/">
        Vue Router
      </a>
    </div>
    <div class="pt-3">
      <a class="font-bold underline" href="https://prettier.io/"> Prettier </a>
    </div>
    <div class="pt-3">
      <a class="font-bold underline" href="https://date-fns.org/"> date-fns </a>
    </div>
  </FeatureContainer>
</template>
<script setup lang="ts">
import { useForm, useField } from 'vee-validate'
import FeatureContainer from './FeatureContainer.vue'
import ArmFlex from 'vue-material-design-icons/ArmFlex.vue'
import AccountCircle from 'vue-material-design-icons/AccountCircle.vue'
import AccountCircleOutline from 'vue-material-design-icons/AccountCircleOutline.vue'
import Reload from 'vue-material-design-icons/Reload.vue'

// FORM SCHEMA
// Define a validation schema
const schema = {
  exampleNumber: 'required|between:9,99',
  exampleEmail: 'required|email'
}

// Create a form context with the validation schema
const { handleSubmit } = useForm({
  validationSchema: schema,
  initialValues: {
    exampleNumber: '',
    exampleEmail: ''
  }
})

const { value: exampleNumber, errorMessage: exampleNumberError } =
  useField<number>('exampleNumber')
const { value: exampleEmail, errorMessage: exampleEmailError } =
  useField<string>('exampleEmail')

const onSubmit = handleSubmit(
  // On valid submit
  (values) => console.log('Submitted', values),
  // On validation error
  (context) => console.log('Validation error context', context)
)
</script>
<style lang=""></style>
