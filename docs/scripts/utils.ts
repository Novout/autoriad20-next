export const setCorrectId = (str: string) => {
  return str.toLowerCase().replaceAll(' ', '-').replaceAll(':', '')
}