export const imageSetBySize = (string: string, size: string) => {
  const array = string.split(",\n").find(image => image.endsWith(size))

  return array?.split(" ")[0]
}
