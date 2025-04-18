const user = {
    name: 'Вася',
    surname: 'Пупкин',
    age: 24,
    skills: ['Программирование',
            'Кулинария'],
    1: 1
};
console.log(user);
console.log(user.name);
console.log(user.skills[1]);
 
// расчетная
console.log(user['skills']);
const l='lls';
console.log(user['ski' +l]);

// const resu = prompt('Введите число');
//console.log(resu);
user['city'] = 'Москва';
user.age=26; 
console.log(user);

console.log('-----Сортировка-81---');
const users =[
    {name: 'Вася', age: 30, skills:
['Разраб','Тестер']},
    {name: 'Катя', age: 10, skills:
    ['Разраб','Тестер']},
    {name: 'Аня', age: 18, skills:
    ['Разраб','Тестер']},
    {name: 'Петя', age: 45, skills:
    ['Разраб','Тестер']},
];
console.log(users.sort((a, b) => {
    return a.age - b.age
}));



console.log('---преобразование--82--');
const user2 = [
    {
        name: 'Вася',
        surname: 'Пупкин',
        age: 24,
        skills: ['Программирование',
                'Кулинария'],
        1: 1
    }
];
const userData = user2.map(user => {
    return {
        fullName: `${user.name} ${user.surname}`,
        skillNum: user.skills.length
    }
}
);
console.log(userData);



console.log('-------Методы--83----');

let userm = {
    name: 'Вася',
    surname: 'Пупкин',
    age: 24,
    getfio: function(){
        return this.name +' '+ this.surname;

    }
    
};
console.log(userm.getfio());
console.log('-------Кошелек--84----');
const walet = {
    balans:0,
    operations: [],
    getPlus: function(nameOper,sum){
        this.balans+=sum;
        //this.operations.push([nameOper, sum]);
        this.operations.push({
            reason: nameOper,
            sum: sum});
    },
    getMinus: function(nameOper,sum){
        if(this.balans >= sum){
            this.balans-=sum;
            this.operations.push({
                reason: nameOper,
                sum: sum});
        } else {
            return false;

        }
     },
    getOperasii: function(){
        console.log(this.operations.length);
    }
};
walet.getPlus('зп', 200);
walet.getPlus('дивид', 500);
walet.getMinus('налог', 50);
walet.getMinus('таможня',120);

console.log(walet);

walet.getOperasii();
console.log('-------86 итерирование по массиву------');
const cities = {
    msk: {
        let: 200,
        temp: 25
    },
    spb: {
        let: 100,
        temp: 20
    }
} 
    let sumTemp=0;
     let citiesCount = 0;
let citiesCount2 =Object.keys(cities).length;

    for(const key in cities){
        console.log(key);
        citiesCount++;
        sumTemp+=cities[key].temp;
    }
console.log(sumTemp / citiesCount);
    for(const key2 of Object.keys(cities)){
        console.log(cities[key2].temp);
    }

console.log(sumTemp / citiesCount2);
//-----------------------------------------------
console.log('-------87 деструктуризация по массиву ------');
const arr87=[2,3,4];

const [a31,b3,c3] = arr87;
console.log(b3);
//- также и с объектами ---

const {surname,...ostalnoe} = userm;
console.log(surname);
console.log(ostalnoe);
//- добавление данных в  объект ---
const addData = {
        skill: ['Разработка', 'Диз']
};
// userm.skills=addData.skill;

userm = {...userm, ...addData};
console.log(userm);
console.log('-------88 opchional, доступ к свойствам которых нет ------');
/*
const cities = {
    msk: {
        let: 200,
        temp: 25
    },
    spb: {
        let: 100,
        temp: 20
    } 
} 
*/

    console.log(cities.msk.tempp?.fg);
// знак вопроса убирает ошибку на андефайн

const per='spb';
console.log(cities[per].let);



console.log('-------89 склад:----------');
console.log('------ найти по ид, добавить товар получение веса товара ----');

const warehouse = {
    goods:[],
    fineGoodById: function(id) {
       return this.goods.find(g => g.id == id);
    },
    
    addGood: function(good) {
        const existeGood = this.fineGoodById( good.id);
        if (existeGood){
            console.log('товар уже есть');
            return;
        }
        this.goods.push(good);
    },
    getWeight: function() {
        return this.goods.reduce((acc, el) => 
        acc += el.weight?.kg ? el.weight.kg : 0, 0 );
    }
};

/* Товары */
const car={
    id: 1,
    weight: {
        kg: 1200
    },
    brand: 'Ford'
};

const chair ={
    id: 2,
    weight: {
        kg:2
    }
};

const paper = {
    id: 3,
    color: 'red'
};

console.log('Вывод товаров:');
warehouse.addGood(car);
console.log(warehouse.goods);
warehouse.addGood(car);
warehouse.addGood(chair);
warehouse.addGood(paper);
console.log(warehouse.goods);
let finditem = warehouse.fineGoodById(2);
console.log(finditem);
let w = warehouse.getWeight();
console.log(w);

console.log('-------96 примитивы и объекты----------');
const userq = {
    name: 'Михаил',
    id: 2
};
console.log(userq);
let newuserq=userq;
userq.name='нов_михаил';
console.log(newuserq);
// чтоб была не ссылка а новый объект:
newuserq = Object.assign({},userq);
userq.name='нов_михаил2';
console.log(newuserq);