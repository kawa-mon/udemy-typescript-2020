export {}

class Person {
  constructor(public readonly name: string, protected age: number) {}
  incrementAge() {
    this.age += 1
  }
  greeting(this: Person) {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`)
  }
}

class Teacher extends Person {
  constructor(name: string, age: number, private _subject: string) {
    super(name, age)
  }
  get subject(): string {
    if (!this._subject) throw new Error('There is no subject.')
    return this._subject
  }
  set subject(value: string) {
    if (!value) throw new Error('There is no subject.')
    this._subject = value
  }
  greeting(this: Teacher) {
    console.log(
      `Hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}.`
    )
  }
}
const teacher = new Teacher('Quill', 38, 'Math')
teacher.subject = 'Music'
teacher.greeting()
