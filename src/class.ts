export {}

class Person {
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
console.log(Person.species)
console.log(Person.isAdult(20))
console.log(Teacher.species)
console.log(Teacher.isAdult(20))
