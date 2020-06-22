export {}

abstract class Person {
  static species = 'Homo sapiences'
  static isAdult(age: number): boolean {
    if (age > 17) return true
    return false
  }

  constructor(public readonly name: string, protected age: number) {}

  incrementAge() {
    this.age += 1
  }

  greeting(this: Person) {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`)
    this.explainJob()
  }
  abstract explainJob(): void
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

  explainJob(): void {
    console.log(`I am a teacher and I teach ${this.subject}.`)
  }
}

const teacher = new Teacher('Quill', 38, 'Math')
teacher.greeting()
