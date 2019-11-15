
module.exports = class StringCalculator {
    constructor() {
        this.negativenum = (string) => {
            var number = "";
            for (var k = 0;k < string.length; k++){
                if (string[k] == "-" && !isNaN(string[k+1])){
                    number += '-' + string[k+1] + ',';
                }
            }
            return number;

        };
    }

    Add(string){
        var sum = 0; 
        let numbers = string.match(/[0-9]{1,}/gm); // match only numbers

        if (string == ""){ // check if string is empty
            return 0;
        }

        let checkNegative = this.negativenum(string);
        try {
            if (string.includes("-")) throw( "Negatives " + checkNegative + " not allowed");
        }catch(error) { // checking for negatives
            return error;
            
        }

        for (let i = 0;i < numbers.length;i++) {
            var num = parseInt(numbers[i]); // convert string to int
             
            if (num > 1000){
                sum += 0; // ignore numbers higher than 1000
            } else {
                sum += num;  
            }           
        }
        return sum;
    }
    
    
}

