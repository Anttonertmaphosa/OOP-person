const { person } = require("../src/person");

describe("checks name", function() {
    it("check if person.name is Ryan", function() {
        expect(person.name).toBe("Ryan")
    })
})

describe("checks age", function(){
    it("check if person.age is 30", function(){
        expect(person.age).toBe(30)
    })
})

describe("checks gender", function(){
    it("check if person.gender is male", function(){
        expect(person.gender).toBe("male")
    })
})

describe("checks first interest ", function(){
    it("check if person.interests[0] is being a hardarse", function(){
        expect(person.interests[0]).toBe("being a hardarse")
    })
})

describe("checks second interest ", function(){
    it("check if person.interests[1] is agile", function(){
        expect(person.interests[1]).toBe("agile")
    })
})

describe("checks third interest ", function(){
    it("check if person.interests[2] is ssd hard drives", function(){
        expect(person.interests[2]).toBe("ssd hard drives")
    })
})