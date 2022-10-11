import {usersObj} from "./08_01";

beforeEach(()=>{

})

test("should select corresponding user from obj",()=>{
    expect(usersObj[0]).toBe('Dima')
    expect(usersObj[1]).toBe('Katya')
    expect(usersObj[2]).toBe('Olya')
    expect(usersObj[3]).toBe('Masha')
})