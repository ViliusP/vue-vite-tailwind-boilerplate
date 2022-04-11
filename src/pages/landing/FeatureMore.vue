<template>
  <FeatureContainer title="And others">
    <div id="VeeValidate" class="pt-6">
      <a class="font-bold underline" href="https://vee-validate.logaretm.com/v4/"> VeeValidate - Form Validation for Vue.js</a>

      <form class="flex flex-col justify-items-center pt-2" @submit="onSubmit">
        <!-- Globally registered in main.ts -->
        <text-field
          v-model="exampleEmail"
          :place-holder="$t('landing_page.EMAIL')"
          :label="$t('landing_page.EMAIL')"
          :error="exampleEmailError"
        ></text-field>
        <text-field
          v-model="exampleNumber"
          class="pb-2"
          :label="$t('landing_page.NUMBER')"
          :place-holder="$t('landing_page.NUMBER')"
          :error="exampleNumberError"
        ></text-field>
        <!-- Globally registered in main.ts -->
        <outlined-button color="bg-indigo-500">Submit (check console)</outlined-button>
      </form>
    </div>
    <div id="MaterialDesignIcons" class="pt-6">
      <a class="font-bold underline" href="https://github.com/robcresswell/vue-material-design-icons"> Material design icons </a>
      <div class="flex items-center pt-2">
        <ArmFlex fill-color="#FFAA15" :size="50" />
        <ArmFlex fill-color="#FF0015" :size="40" />
        <ArmFlex :size="30" />
        <AccountCircle :size="50" />
        <AccountCircleOutline :size="50" />
        <Reload class="animate-spin" :size="50" />
      </div>
    </div>

    <div id="Vue Router" class="pt-6">
      <a class="font-bold underline" href="https://next.router.vuejs.org/"> Vue Router </a>
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

  const { value: exampleNumber, errorMessage: exampleNumberError } = useField<number>('exampleNumber')
  const { value: exampleEmail, errorMessage: exampleEmailError } = useField<string>('exampleEmail')

  const onSubmit = handleSubmit(
    // On valid submit
    (values) => console.log('Submitted', values),
    // On validation error
    (context) => console.log('Validation error context', context)
  )
</script>
<style lang=""></style>
