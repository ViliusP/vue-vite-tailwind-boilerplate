// Utilities
import { propsFactory } from '../utils/propsFactory'
import { isCssColor, isTailwindColor } from '../utils/color'
import { computed, Ref } from 'vue'

// Types
import type { CSSProperties } from 'vue'

export interface ColorProps {
  color: string
}

type ColorValue = string | null | undefined

// Composables
export const makeColorProps = propsFactory(
  {
    color: {
      type: String,
      default: 'div'
    }
  },
  'color'
)

export function useColor(
  colors: Ref<{
    background?: ColorValue
    text?: ColorValue
  }>
) {
  const backgroundIsCssColor = computed(() =>
    isCssColor(colors.value.background)
  )
  console.log('colors.value', colors.value)
  const textIsCssColor = computed(() => isCssColor(colors.value.text))

  const backgroundIsTailwindColor = computed(() =>
    isTailwindColor(colors.value.background)
  )
  const textIsTailwindColor = computed(() => isTailwindColor(colors.value.text))

  const colorClasses = computed(() => {
    const classes: string[] = []

    if (
      colors.value.background &&
      !backgroundIsCssColor.value &&
      backgroundIsTailwindColor
    ) {
      classes.push(`bg-${backgroundIsTailwindColor.value}`)
    }

    if (
      colors.value.text &&
      !textIsCssColor.value &&
      textIsTailwindColor.value
    ) {
      classes.push(`text-${textIsTailwindColor.value}`)
    }

    return classes
  })

  const colorStyles = computed(() => {
    const styles: CSSProperties = {}

    if (colors.value.background && backgroundIsCssColor.value) {
      styles.backgroundColor = colors.value.background
    }

    if (colors.value.text && textIsCssColor.value) {
      styles.color = colors.value.text
      styles.caretColor = colors.value.text
    }

    return styles
  })

  return { colorClasses, colorStyles }
}
