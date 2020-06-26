function Logging(message: string) {
  console.log('Logging Factory')
  return function (constructor: Function) {
    console.log(message)
    console.log(constructor)
  }
}

function Component(template: string, selector: string) {
  console.log('Component Factory')
  return function <T extends { new (...args: any[]): { name: string } }>(constructor: T) {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args)
        console.log('Component')
        const mountedElement = document.querySelector(selector)
        const instance = new constructor()
        if (mountedElement) {
          mountedElement.innerHTML = template
          mountedElement.querySelector('h1')!.textContent = instance.name
        }
      }
    }
  }
}

@Logging('Logging User')
@Component('<h1>{{ name }}</h1>', '#app')
class User {
  name = 'Quill'
  constructor(public age: number) {
    console.log('User was created!')
  }
}
const user1 = new User(32)
const user2 = new User(32)
const user3 = new User(32)
