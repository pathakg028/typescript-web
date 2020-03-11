import { User } from './models/User'

const user = new User({ name: 'Gp', age: 90 })

// user.fetch();

//     user.set({name: 'Gaurav Pathak', age: 57});
//     user.save();

user.events.on('change', ()=>{
    console.log('change!');

})
user.events.trigger('change')       