function Add(string){
    var sum = 0;

    for (i = 0;i < string.length;i++) {
        var num = parseInt(string[i]);
        if (num) {
            sum += num;
        }             
     }
     return sum;
    
}

console.log(Add("\n2,5"))