function uniqueString(word = '') {
  const array = word.split('')
  const obj = {}
  for (let i = 0; i < array.length; i++) {
    const char = array[i]
    if (Object.keys(obj).includes(char)) {
      obj[char] = { ...obj[char], count: obj[char].count + 1 }
    } else {
      obj[char] = {
        char,
        count: 1,
      }
    }
  }
  const values = Object.values(obj).filter((char) => char.count > 1)
  if (values.length > 0) {
    return values
  }
  return 'Ningun caracter se repite'
}

console.log(uniqueString('jovan'))
