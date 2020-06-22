export {}

interface Human {
  name: string
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
