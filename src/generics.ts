export {}

function copy<T extends { name: string }>(value: T): T {
  return value
}
console.log(copy({ name: 'Quill', age: 38 }))
