export {}

function Logging(constructor: Function) {
  console.log('Logging...')
  console.log(constructor)
}

@Logging
class User {
  name = 'Quill'
  constructor() {
    console.log('User was created!')
  }
}
const user1 = new User()
const user2 = new User()
const user3 = new User()
