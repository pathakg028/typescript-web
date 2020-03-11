import { User } from './modal/User'

const user = new User({name: 'Gaurav', age: 36})
console.log(user.get('name'))
console.log(user.get('age'))

user.set({name: 'Pathak'})

user.on('change', () => {
console.log("change1");
}
)
user.on('change', () => {
    console.log("change2");
    }
    )
    user.on('save', () => {
        console.log("change3");
        }
        )
        user.trigger('change')
