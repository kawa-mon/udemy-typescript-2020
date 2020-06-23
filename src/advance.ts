interface Engineer {
  name: string
  role: string
}

interface Blogger {
  name: string
  follower: number
}

// type EngineerBlogger = Engineer & Blogger
interface EngineerBlogger extends Engineer, Blogger {}

const quill: EngineerBlogger = {
  name: 'quill',
  role: 'front-end',
  follower: 1000
}

function toUpperCase(x: string): string
function toUpperCase(x: number): number
function toUpperCase(x: any): any {
  if (typeof x === 'string') return x.toUpperCase()
  return x
}
// const upperHello = toUpperCase('hello') as string
const upperHello = toUpperCase('hello')

type NomadWorker = Engineer | Blogger
function describeProfile(nomadWorker: NomadWorker) {
  if ('role' in nomadWorker) console.log(nomadWorker.role)
  if ('follower' in nomadWorker) console.log(nomadWorker.follower)
}

class Dog {
  kind: 'dog' = 'dog'
  speak(): void {
    console.log('bow-bow')
  }
}
class Bird {
  kind: 'bird' = 'bird'
  speak(): void {
    console.log('tweet-tweet')
  }
  fly(): void {
    console.log('flutter')
  }
}
type Pet = Dog | Bird
function havePet(pet: Pet): void {
  switch (pet.kind) {
    case 'bird':
      pet.fly()
  }
  if (pet instanceof Bird) pet.fly()
}
havePet(new Bird())

// const input = <HTMLInputElement>document.getElementById('input')
const input = document.getElementById('input') as HTMLInputElement
if (input) input.value

interface Designer {
  name: string
  [index: string]: string
}
const designer: Designer = {
  name: 'Quill',
  role: 'web'
}
console.log({ designer })
