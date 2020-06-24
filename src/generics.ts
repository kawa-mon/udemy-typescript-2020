export {}

function copy<T extends { name: string }, U extends keyof T>(value: T, key: U): T {
  value[key]
  return value
}
console.log(copy({ name: 'Quill', age: 38 }, 'name'))
console.log(copy({ name: 'Quill', age: 38 }, 'age'))
// console.log(copy({ name: 'Quill', age: 38 }, 'foo'))

class LightDatabase<T extends string | number | boolean> {
  private data: T[] = []

  add(item: T) {
    this.data.push(item)
  }
  remove(item: T) {
    this.data.splice(this.data.indexOf(item), 1)
  }
  get() {
    return this.data
  }
}
const stringLightDatabase = new LightDatabase<string>()
stringLightDatabase.add('Apple')
stringLightDatabase.add('Banana')
stringLightDatabase.add('Grape')
stringLightDatabase.remove('Banana')
console.log(stringLightDatabase.get())

interface Todo {
  title: string
  text: string
}
type TodoAble = Partial<Todo>
type ReadTodo = Readonly<Todo>

const fetchData: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve('hello')
  }, 1000)
})
fetchData.then(data => {
  console.log(data.toUpperCase())
})
