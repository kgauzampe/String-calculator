let stringCalculator = require('../src/stringCalculator');
let calculate = new stringCalculator;



describe("Check if string is null", function () {
    
   
    it("check if sting contains numbers", function () {
        expect(calculate.Add("")).toEqual(0);
    }) 

    it("check if it adds numbers above 1000", function () {
        expect(calculate.Add("1,2019,7")).toEqual(8);

    })
    it("check if it separates using a coma", function () {
        expect(calculate.Add("1,7")).toEqual(8);
 
    })
    it("check if it separates using other special characters", function () {
        expect(calculate.Add("1)(*&^%),7")).toEqual(8);

    })
    it("check if it only takes numbers", function () {
        expect(calculate.Add("1,\n2,7")).toEqual(10);

    })

    it("throw an error if there are negatives", function () {
    expect(() => {
        calculate.Add('1,-8,9')
    }).toThrowError('Negatives -8, not allowed');
 
    })
  
});
