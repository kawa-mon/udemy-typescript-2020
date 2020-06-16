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

// enum型は大文字から始める・中身は全て大文字にするのが慣習
enum CoffeeSize {
  SHORT = 'SHORT',
  TALL = 'TALL',
  GRANDE = 'GRANDE',
  VENTI = 'VENTI'
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL
}
coffee.size

let anything: any = true
anything = 'hello'
anything = ['hello', 33, true]
anything = {}
anything.test = 'test'
