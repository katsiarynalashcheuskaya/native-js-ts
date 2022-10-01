import {createGreetingMessages, ManType} from "./05_01";

let people: Array<ManType> = []

beforeEach(()=>{
    people = [
        {name: 'Andrei Ivanov', age: 33},
        {name: 'Alexandr Petrov', age: 24},
        {name: 'Dmitry Sidorov', age: 18}
    ]
})

test ('should get array of greating messages', () => {

    const messages = createGreetingMessages(people)

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe('Hello, Andrei! Welcome to It-Incubator!')
    expect(messages[1]).toBe('Hello, Alexandr! Welcome to It-Incubator!')
    expect(messages[2]).toBe('Hello, Dmitry! Welcome to It-Incubator!')
})