export const setCorrectId = (str: string) => {
  return str.toLowerCase().replaceAll('sub-agrupamento - ', '').replaceAll(':', '').replaceAll(' ', '-')
}