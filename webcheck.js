let userEmail = 'abc123abc'
let password =  '1234'

let userChecker = function(myString){
        if((myString.includes(123)) && (myString.length > 6)){
                return true
        } 

        return false

}

console.log(userChecker(userEmail));

let passwordChecker = function(pass){
        if((pass.includes(1234)) && (pass.length > 2)){
                return true
        } 

        return false
}

console.log(passwordChecker(password));

function newFunction() {
        return '@@@';
}
