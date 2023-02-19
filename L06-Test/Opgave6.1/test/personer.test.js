import { persons, addPerson, findPersonByName, findPersonByAge} from "../personerLogik.js";
import { assert } from "chai";

describe("Test all (add, find by name and find by age", () =>{
    it("test add person", () => {
        addPerson("Hans", 123);
        addPerson("Lars", 123);
        addPerson("Erik", 234);
        const actual = persons;
        const expected = [
            {name: "Hans", age: 123},
            {name: "Lars", age: 123},
            {name: "Erik", age: 234}
        ]
        assert.sameDeepOrderedMembers(actual,expected);
    })

    it("test find person by name", () => {
        const actual = findPersonByName("Hans");
        const expected = "Hans 123";
        assert.equal(actual, expected);
    })

    it("test find person(s) by age (1 person)", () => {
        const actual = findPersonByAge(234);
        const expected = ["Erik 234"];
        assert.sameOrderedMembers(actual, expected);
    })

    it("test find person(s) by age (2 person)", () => {
        const actual = findPersonByAge(123);
        const expected = ["Hans 123", "Lars 123"];
        assert.sameOrderedMembers(actual, expected);
    })
})