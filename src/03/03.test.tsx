import {StudentType} from "../02/02";
import {addSkill, doesStudentInCity, makeStudentActive} from "./03";
import exp from "constants";


let student: StudentType;
beforeEach(()=>{
    student = {
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
})

test("new tech skill should be added to student",()=>{
    expect(student.technologies.length).toBe(3);
    addSkill(student, "React");
    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe("React");
    expect(student.technologies[3].id).toBeDefined();
    })


test("student should be done active",()=>{
        expect(student.isActive).toBe(false);
        makeStudentActive(student);
        expect(student.isActive).toBe(true);
    })


test("student lives in city?",()=>{
    let result1 = doesStudentInCity(student, "Moscow");
    let result2 = doesStudentInCity(student, "Minsk");
    expect(result1).toBe(false);
    expect(result2).toBe(true);
})