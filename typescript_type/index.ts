let hasValue: boolean = true
let count: number = 10
let float: number = 3.14
let negative: number = -0.12
let single: string = 'hello'
let double: string = 'hello'
let back: string = `hello`

const person: {
  name: {
    first: string
    last: string
  }
  age: number
} = {
  name: {
    first: 'Jack',
    last: 'Smith'
  },
  age: 21
}
console.log(person)

const fruits: string[] = ['Apple', 'Banana', 'Grape']

const book: [string, number, boolean] = ['business', 1500, false]
