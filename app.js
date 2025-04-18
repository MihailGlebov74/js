let a=1;
console.log(a);
a="Тест";
console.log(a);
const name1="Миша";
const name2="Глебов";
console.log(name1+' '+name2 + 10);
a=10;
let va='15';
console.log(a < va);
console.log(typeof name1); // выводит тип данных
const a1='Mihail';
const a2='Gleb';
const a3='avtor';
const itog=a1 + '-' + a2 + '-' + a3;
console.log(itog);
const itog2=`${a1}  атор ${a2}`;
console.log(itog2);
console.log(Number(va)+5); // преобр типа с больш буквы
console.log(String(a)+5); 
console.log(Boolean(null)); 
const money=40;
const canBuy=money > 50;
if (canBuy){
    console.log('Может');
} else {
    console.log('Balalayka');
}
//const q=Number(prompt('ВВЕДИТЕ'));
//console.log(q);
const role='менеджер';

switch (role){
    case 'менеджер':
        console.log('менендж');
        break;
    default:
        console.log('не определен');
}
// тернарные оператор
10>0 ? console.log('больше'): console.log('меньшы');
const str=10>5 ? 'да': 'нет';
console.log(str);
// лог операторы
const isadmin = true;
const isawrt = true;
console.log(`Систем.файл ${!isadmin && isawrt}`);
let username=0;
console.log(username ?? 'def'); // корректноопределит нуль или андеф


function logName (name,surname) {
    console.log(`Мое имя ${name} ${surname}`);

}
logName('Ант','Ларичев');
// logName();


function kvadrat(num){
    return num*num;
}
console.log(kvadrat(5));

const poft=function(num){
    return num*num;
}
console.log(poft(6));
// стрелочные
// const poft2= num  => num * num;
const poft2 = num  => {
    console.log('из 2х строк');
    return num * num + 5;
   
}
console.log(poft2(7)); 
//-------------------------
function toPower(num, power){
    const res= num ** power;
    return res;
}
console.log (toPower(2,3));

const toPower2=(num,power) => num ** power;
console.log (toPower2(2,4));

//-------массивы---------------------
const roles = ['ad', 'us','supus'];
console.log(roles);
console.log('---------') ;
console.log(roles[1]);
console.log(roles[roles.length-1]);
const usern=new Array ('D','f','g','n');
console.log(usern);
usern.push('r'); // добавить елемент
console.log(usern);
usern.unshift('r1'); // добавить в начало
console.log(usern);
usern.pop(); // удаляет посл елемент
console.log(usern);
usern.shift();  // удаляет 1 елемент
console.log(usern);
let ind=usern.indexOf('g');// поиск елем
console.log(ind);
ind=usern.includes('g');// поиск елем
console.log(ind);
ind=usern.slice(1); // отрезает ккусок начиная с.
console.log(ind);
ind=usern.slice(1,3); // отрезает ккусок начиная с.  по - не включая
console.log(ind);  // -1 посл елемент
//ind=usern.splice(2); // отрезает ккусок начиная с.  по - не включая
                    // модифицирует исх масс
                    // начальн и длину(кол=во) берет
console.log(ind);  // -1 посл елемент
const usern2=new Array ('s','l','h','j');
const ind2 = usern.concat(usern2);
console.log(ind2);
// строка в массив
const usern3='s-t-u-j';
const res=usern3.split('-');
console.log(res);
console.log(usern2.join(' '));  // из масс в строку
// Деструктуризация

//const [u1,u2,_,u4] = usern2;
//console.log(u2);
const [y1, ...othe]=usern2;
console.log(othe);
const url='https://purple.ru/course/javascript';


function urlpars(url){
    const [protokol,_,host, ...path]= url.split('/');
    //console.log(res);
    //const ht=res[0];
    //console.log(typeof(ht));
    //const ht2 = String(ht.slice(-2));
    console.log(path);
    console.log(`Протокол: ${protokol.split(':')[0]}`);
    // перевод в массив по :
    console.log(`Сайт : ${host}`);
    console.log(`Путь: /${path.join('/')}`);
}
urlpars(url);

for(let i = 1; i < 10; i++) {
    console.log(`баланс ${i}`);
}


const tasks=['зад1','зад2','зад3'];

for(let i = 0; i < 3; i++) {
    if (tasks[i]=='зад2'){

        continue; // выходим. пропускаем
        break; // полностью прекращаем цикл 
    }
    console.log(`Задача: ${tasks[i]}`);
}
//------------------------------
const arr1 = ['!', 'JS', 'lave', 'I'];
let rez1 ='';
for (i = arr1.length-1; i > -1; i--) {
    console.log(arr1[i]);
    rez1 = rez1  + arr1[i] + ' ';
}
console.log(rez1);

console.log(arr1.reverse().join(' ')); //реверс массива
//--------------------
// масив в массиве
const tasks1= [[1,'zad1'],[2,'zad2']];

for( i = 0; i < tasks1.length;  i++) {
    // console.log(`-- ${tasks1[i]}`);
    for(let  j = 0; j < tasks1[i].length;  j++) {
        console.log(`-- ${tasks1[i][j]}`);
    }
}
// ----  while-----
i=1;
while (i<5){
    console.log(`Вывод: ${i}`);
    i++;

}
i=0;
do {
    console.log('Ку' + i);
        i++;
} while (i<0)

// упрощенны фор
console.log('--for---of------'); 
for (let element of arr1){
    console.log(element);
}


console.log('--for---in------'); 
for (let index in  arr1){
    console.log(index);
}
// ф-ции высшего порядка




























