import {student, StudentType} from "../02/02";


const sum = (a:number, b: number) => {
    return a+b;
}
 export const res = sum(sum(2,3), sum(4, 3))
 const res2 = sum(2,4)

export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const makeStudentActive = (s: StudentType) => {
    s.isActive = true;
    }

export const doesStudentInCity = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName;
}
