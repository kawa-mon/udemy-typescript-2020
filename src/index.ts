export {}

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

let unionType: number | string = 10
unionType = 'hello'
let unionTypes: (number | string)[] = [10, 'hello']
unionTypes

const apple = 'apple'
type ClothSize = 'small' | 'medium' | 'large'
const cloth: {
  color: string
  size: ClothSize
} = {
  color: 'white',
  size: 'medium'
}

const add = (number1: number, number2: number): number => {
  return number1 + number2
}
add(3, 2)

const sayHello = (): void => {
  console.log('Hello')
}

const doubleNumber: (num: number) => number = (num) => num * 2

const doubleAndHandle = (num: number, cb: (num: number) => number): void => {
  const doubleNum = cb(num * 2)
  console.log(doubleNum)
}
doubleAndHandle(10, (num) => {
  return num
})

let unknownInput: unknown
let text: string
unknownInput = 'hello'
unknownInput = 33
unknownInput = true
if (typeof unknownInput === 'string') text = unknownInput

const error = (message: string): never => {
  throw new Error(message)
}
error('This is an error')
