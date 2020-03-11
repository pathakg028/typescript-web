import { User } from './modal/User'

const user = new User({name: 'Gaurav', age: 36})
console.log(user.get('name'))
console.log(user.get('age'))

user.set({name: 'Pathak'})

user.on('myEvent', () => {

})
console.log(user);