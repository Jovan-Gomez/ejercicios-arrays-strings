class MyArray {
  constructor() {
    this.length = 0
    this.data = {}
  }

  getAll() {
    return this.data
  }
  get(index) {
    return this.data[index]
  }

  push(value) {
    this.data[this.length] = value
    this.length++
    return this.length
  }

  pop() {
    const lastItem = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--
    return lastItem
  }

  shiftItems(index, newValue) {
    let item = this.data[index]
    if (index && newValue) {
      this.data[index] = newValue
      return item
    }
    delete this.data[index]
    this.length--
    return item
  }

  deleteAtIndex(index) {
    return this.shiftItems(index)
  }
}

const myArray = new MyArray()

myArray.push(1)
myArray.push(2)
myArray.push(3)
myArray.push(4)
myArray.push(5)
console.log(myArray.getAll())
console.log(myArray.shiftItems(1))
console.log(myArray.getAll())
console.log(myArray.deleteAtIndex(4))
console.log(myArray.getAll())
