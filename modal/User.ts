interface UserProps {
    name?: string,
    age?: number
}
export class User {
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
}