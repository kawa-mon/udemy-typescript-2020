function Logging(message: string) {
  console.log('Logging Factory')
  return function (constructor: Function) {
    console.log(message)
    console.log(constructor)
  }
}

function Component(template: string, selector: string) {
  console.log('Component Factory')
  return function (constructor: { new(...args: any[]): { name: string } }) {
    console.log('Component')
    const mountedElement = document.querySelector(selector)
    const instance = new constructor()
    if (mountedElement) {
      mountedElement.innerHTML = template
      mountedElement.querySelector('h1')!.textContent = instance.name
    }
  }
}

@Logging('Logging User')
@Component('<h1>{{ name }}</h1>', '#app')
class User {
  name = 'Quill'
  constructor() {
    console.log('User was created!')
  }
}
const user1 = new User()
const user2 = new User()
const user3 = new User()
