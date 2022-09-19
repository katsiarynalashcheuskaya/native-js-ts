export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}
type TechType = {
    id: number
    title: string
}
type CityType = {
        title: string
        countryTitle: string
}
type AddressType = {
    street: string
    city: CityType
}

export const student: StudentType = {
    id: 1,
    name: 'Katya',
    age: 25,
    isActive: false,
    address: {
        street: "Surganova 2",
        city: {
            title: "Minsk",
            countryTitle: "Belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: "Html"
    },
        {
            id: 2,
            title: "Js"
        },
        {
            id: 3,
            title: "Css"
        },
    ]
}

console.log(student.age);
console.log(student.name);
console.log(student.address.city.title);
console.log(student.technologies[0].title);


