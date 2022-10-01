export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: 'Andrei Ivanov', age: 33},
    {name: 'Alexandr Petrov', age: 24},
    {name: 'Dmitry Sidorov', age: 18}
]

const dimychTransformator = (man: ManType) => ({
    stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: man.name.split(" ")[0],
        lastName: man.name.split(" ")[1]
    })


const devs1 = [
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Andrei', lastName: 'Ivanov'
    }, {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Alexandr', lastName: 'Petrov'
    },
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Dmitry', lastName: 'Sidorov'
    }
]

/*let d1 = dimychTransformator(people[0])
let d2 = dimychTransformator(people[1])
let d3 = dimychTransformator(people[2])*/

const devs2 = [
    /*d1,d2,d3*/
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2])
]

const devs3 = people.map(dimychTransformator)
const devs4 = people.map(man => ({
    stack: ['css, html', 'js', 'tdd', 'react'],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
}))

const messages = people.map(man => `Hello, ${man.name.split(" ")[0]}! Welcome to It-Incubator!`)


export const createGreetingMessages = (people: Array<ManType>) => {
    return people.map(man => `Hello, ${man.name.split(" ")[0]}! Welcome to It-Incubator!`)
}