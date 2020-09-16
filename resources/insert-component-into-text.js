export const insertComponentsIntoText = (str, replacements) => {
  const splitRegex = new RegExp(/\[\[(\w*)\]\]/g)
  const parts = str.split(splitRegex)

  return parts.map(word => {
    if (Object.prototype.hasOwnProperty.call(replacements, word)) {
      return replacements[word]
    }
    return word
  })
}
