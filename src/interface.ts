export {}

// type addFunc = (num1: number, num2: number) => number;
interface addFunc {
  (num1: number, num2: number): number
}
let addFunc: addFunc
addFunc = (n1: number, n2: number) => {
  return n1 + n2
}

interface Nameable {
  readonly name: string
}
interface Human extends Nameable {
  age: number
  greeting(message: string): void
}

class Developer implements Human {
  constructor(public name: string, public age: number, public experience: number) {}
  greeting(message: string) {
    console.log(`Hello! ${message}`)
  }
}
const developer: Human = new Developer('Quill', 38, 5)
console.log({ developer })
console.log(developer.greeting('Bob'))
