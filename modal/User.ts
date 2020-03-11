interface UserProps {
    name?: string,
    age?: number
}
type Callback = () => void;

export class User {
    events: { [key:string]/*this is not an array. This is the syntax when we dont know what the event will be. It can be anything like 'click', 'mouseover'*/: Callback[]} = {}
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
    on(eventName: string, callback: Callback): void {
        const handlers = this.events[eventName] || [];
        handlers.push(callback)
        this.events[eventName] = handlers
    }
    trigger(eventName: string): string[]{
        const handlers = this.events[eventName]
        if(!handlers || handlers.length === 0){
            return
        } else {
            handlers.forEach((callback) => {
                callback();
            })
        }
    }
}