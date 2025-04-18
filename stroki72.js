console.log('--72 работа со строками -----');
const userName = 'Вася ака Терминатор Пупкина';
console.log(userName[5]);
console.log(userName.charAt(5));
console.log(userName.length);
console.log(userName.indexOf('П'));
console.log(userName.lastIndexOf('а'));
console.log(userName.indexOf('%'));
console.log(userName.includes('кин')); 
// проверка на то что содержит

console.log(userName.slice('5'));
// ищем пробел
console.log(userName.indexOf(' '));
const v =userName.indexOf(' ');
console.log(userName.slice(0, userName.indexOf(' ')));

const v2=userName.lastIndexOf(' ');
console.log(userName.slice(v2+1));
console.log(userName.startsWith('В'));
console.log(userName.endsWith('А'));
console.log('--74 преобразование-----');
console.log(userName.toLowerCase());
console.log(userName.toUpperCase());
console.log(userName.replace('а','о'));
// все
console.log(userName.replaceAll('а','о'));
console.log(userName.trimStart());
// проверка номера

function isPhoneNumber(num){
    num = num.trim();
    num = num.replace('+7','8');
    if(!num.trimStart('8')){
        return false;
    }
    num = num.replaceAll('(','');
    if (num.length != 11){
        return false;
    }
    console.log(num.length);
    let onlyNumber = true;
    for (const char of num){
        if(isNaN( Number(char))){
            onlyNumber = false;
            break;
        }
 

    }
    console.log(num);
    return onlyNumber;
}

console.log(isPhoneNumber('+7 (12345 678'));
console.log('--76 преобразование--строк в массив---');
console.log(userName.split(' '));
const [nam1, nam2, nam3, nam4] = 
        userName.split(' ');
console.log(nam1);
// обратно
const arr4=['1','2','33','44'];
console.log(arr4.join('-'));
console.log('--76 пдополнение--строк - --');
const film = 'Звездные войны';
console.log(film.padStart(50,'*'));
console.log(film.repeat(10)); 

const card= '1234098756783456';
console.log(card.slice(-4).padStart(16,'*'));