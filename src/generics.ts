export {}

function copy<T>(value: T): T {
  return value
}
console.log(copy<string>('hello'))
console.log(copy<number>(123))
console.log(copy<boolean>(true))
console.log(
  copy<{ name: string }>({ name: 'Quill' })
)
console.log(copy({ name: 'Quill' }))
