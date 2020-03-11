import axios, { AxiosResponse} from 'axios';
import { Eventing } from './Eventing'

interface UserProps {
    id?: number,
    name?: string,
    age?: number
}

export class User {
    public events: Eventing = new Eventing()
    constructor(private data: UserProps){}

    get(propName: string): (number|string) {
        return this.data[propName];
    }

    set(update: UserProps): void {
        const updatedObject = Object.assign(this.data, update)
        console.log(updatedObject);
        // for(let objData in update){
        //     console.log(update[objData]);
        // }
        // const updatedData = update
        // console.log(updatedData['name']);
        // console.log(updatedData['age']);
    }
   
    fetch(): void {
        axios.get(`http://localhost:3000/users/${this.get('id')}`)
            .then((reponse: AxiosResponse): void => {
             this.set(reponse.data)
        })

    }
    save(): void {
        const id = this.get('id');

        if(id){
            //put
            axios.put(`http://localhost:3000/users/${id}`, this.data)

        } else {
            axios.post('http://localhost:3000/users', this.data)
            //save
        }
    }
}