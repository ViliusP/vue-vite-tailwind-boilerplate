<template>
  <div class="">
    <label class="block mb-2 text-sm font-bold text-gray-700" :for="label">
      {{ label }}
    </label>
    <input
      :id="id"
      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
      :type="type"
      :placeholder="placeHolder"
      :value="modelValue"
      @input="updateInput"
    />
    <a class="text-xs italic text-red-500 whitespace-pre">
      {{ error || ' ' }}
    </a>
  </div>
</template>

<script lang="ts" setup>
  interface Props {
    id?: string
    label?: string
    type?: string
    placeHolder?: string
    error?: string
    modelValue: string
  }

  // Ignore error: "'props' is declared but its value is never read"
  // Its automatically inject to template

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const props = withDefaults(defineProps<Props>(), {
    type: 'text',
    placeHolder: ''
  })

  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
  }>()

  const updateInput = (e: Event) => {
    const target = e.target as HTMLInputElement
    emit('update:modelValue', target?.value)
  }
</script>
<style lang=""></style>
