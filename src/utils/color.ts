export function isCssColor(color?: string | null): boolean {
  return !!color && /^(#|var\(--|(rgb|hsl)a?\()/.test(color)
}

/*
    Color format {bg|text}-{color}-{luminosity?} for example:
    1.  {bg}-{color}-{luminosity}: bg-white-100
        returns 'white-100'
    2.  {text}-{color}: text-red
        returns '100'
    Luminosity needs to be number or nothing
*/
export function isTailwindColor(
  color?: string | null | undefined
): string | null {
  if (color === null || color === undefined) return null
  const isTailwindColor = /(?:$|^|)(text-|bg-)(\S+)(-(\d+))?(?:$|^|)/.test(
    color
  )
  if (!isTailwindColor) return null
  const colorParts = color.split('-')
  if (colorParts.length == 2) return colorParts[1]
  return `${colorParts[1]}-${colorParts[2]}`
}
