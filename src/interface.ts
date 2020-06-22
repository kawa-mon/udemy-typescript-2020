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
  nickname?: string
}
interface Human extends Nameable {
  age: number
  greeting(message?: string): void
}

class Developer implements Human {
  constructor(
    public name: string,
    public age: number,
    public experience: number,
    public nickname?: string
  ) {}
  greeting(message?: string) {
    if (!!message) {
      console.log(`Hello! ${message}.`)
    }
    console.log(`I am ${this.name}. ${this.age} years old. `)
  }
}
const developer: Human = new Developer('Quill', 38, 5, 'Q')
console.log(developer.greeting('Bob'))
console.log(developer.greeting())
