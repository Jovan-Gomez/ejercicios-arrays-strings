function stringCompress(word = '') {
  const array = word.split('')
  let newWord = ''
  const obj = {}
  for (let i = 0; i < array.length; i++) {
    const char = array[i]
    if (Object.keys(obj).includes(char)) {
      obj[char] = { ...obj[char], count: obj[char].count + 1 }
      const index = newWord.indexOf(char) + 1
      let arr = newWord.split('')
      arr[index] = Number(arr[index]) + 1
      newWord = arr.join('')
    } else {
      obj[char] = {
        char,
        count: 1,
      }
      newWord += `${obj[char]['char']}${obj[char]['count']}`
    }
  }

  const values = Object.values(obj).filter((char) => char.count > 1)
  if (values.length > 0) {
    return newWord
  }
  return word
}

console.log(stringCompress('jovan'))
