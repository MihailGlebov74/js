console.log('-----60  итерация по массиву -----');

const score=[5,10,0,15];
/*for (const [i, el] of score.entries()) {
    console.log(`раунд:${i + 1} : ${el}`);
}*/
// entries -   возвращает массив, где есть и индекс и 
// сам елемент

//score.forEach(function(el){
  //  console.log(`раунд: ${el}`) 
//})
// чз стрелочную

/*const iterator = (el) =>{
    console.log(`раунд: ${el}`);
}*/
//score.forEach(iterator);
// forEach отдает елем в функцию  iterator

score.forEach(function(el, i){
  console.log(`раунд:${i + 1}: ${el}`) 
})
console.log('--61  итерация по массиву - map----');
const tranUSD = [10, -7, 50, -10, 100];
const tranRUB = [];
for(const tran of tranUSD){
    tranRUB.push(tran * 60);
}
//console.log(tranUSD);
//console.log(tranRUB);

const tranRUB2 = tranUSD.map((tran, i) => 
{ return tran * 60;
});
console.log(tranUSD);
console.log(tranRUB);
//-------------------------------------
console.log('--62  итерация по массиву - filter----');
const operations = [100,-20,7,-20,50];
console.log(operations);

const positivOperation = operations.filter(operation => {
    return operation > 0;
})

console.log(positivOperation);

const  positivOperationRUB = operations
    .filter(operation => {
        return operation > 0;
    })
    .map(oper => oper * 60);
    console.log(positivOperationRUB);
// называется чейн методов ( в цепочку)
//----------------------------------------------
console.log('--63  итерация по массиву - тренинг----');
const prices = [[100,200], [120,100], [200,350]];

const rez = prices.filter((el)  => {
    if (el[0] < el[1]) {
        return el;
    }
}
).map((el) =>  el[1] - el[0]);
console.log(rez);

//----------------------------------------------
console.log('--64  итерация по массиву - reduce----');
// чтобы получить одно значение с массива

let balans = 0;
for (const opera of operations){
    balans+= opera;
}
console.log(balans);

const finbalanse = operations.reduce((accum,op) => 
    {return accum+= op;} ,0);
    // - 0  по умолчанию
    console.log(finbalanse);
    
//----------------------------------------------
console.log('--65  итерация по массиву - тренинг----');
console.log('--65  поиск средного----');
const arr = [2,4,4,10,20];
const mini = arr.reduce((mi, op, i) => {
   if (i != arr.length-1)
    {return mi + op;}
    else
    {return ( mi + op) / arr.length }

},0);
console.log(mini);
console.log('--66  итерация по массиву - find----');
let fi;
fi = arr.find(el => el >5 );
fiind = arr.findIndex(el => el >5 );
console.log(fi);
console.log(fiind);
// - елсли -1 то елемента нет

//---------some--------------------------
console.log('----some---------');
function some(arr, ele) {
    return arr.find(element => element === ele );
}

console.log(some(arr,10));
console.log(arr.some(el => el === 0 ));
// есть встроен ф-ция по проверке
console.log('--68  итерация по массиву -----');
console.log('--flat flatmap----');


// flat -  делает плоский массив/ есть глубина 1 2 
const prices2 = [[100,200], [120,100], [200,350]];
const res2 = prices2.flat();
console.log(res2);
const res3 = prices2.flatMap(el => el.concat(1));

console.log(res3);
console.log('--69  итерация по массиву --sort---');
const users = ['вася', 'маша','катя','аня'];
console.log(users);
users.sort();
console.log(users);
// отсортировались как строки
// < 0  - a b сохраняем
// > 0 - b a меняем 
operations.sort((a,b) => {
    if (a > b) {
        return 1;
    }  else {
        return -1;
    }
});
console.log(operations);
console.log('--70 быстр созд массива -----');
console.log(new Array(1,2,3,4,5,0));
const arr2 = new Array(5);
console.log(arr2);
// заполнение массива fill
arr2.fill(1);
console.log(arr2);
//fill(1,0,3);  с позиции 0 до поз 3
const arr3 = Array.from({length:5},() =>5);
console.log(arr3);