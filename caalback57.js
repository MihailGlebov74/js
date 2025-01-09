console.log('-----57-----');
function add(a, b){
    return a+b;
}

function min(a, b){
    return a-b;
}


function calcul(a, b, fn){
    console.log(fn.name);
    const ret=fn(a,b);
    console.log(ret);
    //return a+b;
}
calcul(5,4,min);
//---------------------------------------

console.log('-----58--замыкание---');
 
/*function power(pow){
    return function (num){
        return num ** pow;
    }
 } */

 // перепишем под стрелочную ф-цию

 const power = pow => num => num**pow;


 const powerOfTwo = power(3);
 console.log(powerOfTwo(5));
 console.log(powerOfTwo(10));
 console.log(power(2)(6));