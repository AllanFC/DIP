import { persons, addPerson, findPersonByName, findPersonByAge } from "./personerLogik.js";
import { assert } from "chai";
import { describe, it } from "mocha";

describe("Test all (add, find by name and find by age", () =>{
    it("Should be correct", () => {
        addPerson("Hans", 123);
        addPerson("Lars", 234);
        addPerson("Erik", 345);
        const actual = persons;
        const expected = [
            {name: "Hans", age: 123},
            {name: "Lars", age: 234},
            {name: "Erik", age: 345}
        ];
        assert.equal(actual,expected);
    })
    it("Should be correct", () => {
        const actual = findPersonByName("Hans");
        const expected = "Hans 123";
        assert.equal(actual, expected);
    })
})