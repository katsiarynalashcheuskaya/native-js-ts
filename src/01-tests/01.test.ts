import {splitIntoWords, sum} from "./01";
import {mult} from "./01";

//data
let a: number;
let b: number;
let c: number;

beforeEach(()=>{
    a = 1;
    b = 2;
    c = 3;
    }
)

test('sum should be correct',()=> {
//data

//action
    const result1 = sum(a, b);
    a = 100;
    const result2 = sum(a, b);

//expect result
    expect(result1).toBe(3);
    expect(result2).toBe(102);
})

test('mult should be correct',()=> {
//data

//action
    const result1 = mult(a, b);
    const result2 = mult(a, c);

//expect result
    expect(result1).toBe(2);
    expect(result2).toBe(3);
})

test('words must be splited',()=> {
    //data
    const sent1 = "Hello my friends!"
    const sent2 = "JS - the best programming language."


//action
    const result1 = splitIntoWords(sent1);
    const result2 = splitIntoWords(sent2);

//expect result
    expect(result1.length).toBe(3);
    expect(result1[0]).toBe("hello");
    expect(result1[1]).toBe("my");
    expect(result1[2]).toBe("friends");

    expect(result2.length).toBe(5);
    expect(result2[0]).toBe("js");
    expect(result2[1]).toBe("the");
    expect(result2[2]).toBe("best");
    expect(result2[3]).toBe("programming");
    expect(result2[4]).toBe("language");
})


