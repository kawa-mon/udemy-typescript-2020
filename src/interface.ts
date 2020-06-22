export {}

interface Human {
  readonly name: string
  age: number
  greeting(message: string): void
}

class Developer implements Human {
  constructor(public name: string, public age: number, public experience: number) {}
  greeting(message: string) {
    console.log(`Hello! ${message}`)
  }
}
const developer = new Developer('Quill', 38, 5)
developer.name = 'hello'
console.log({ developer })
console.log(developer.greeting('Bob'))
