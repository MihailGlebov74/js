'use strict';
// т.е. без var - будет выдавать ошибку. т.е. более жесткий режим


console.log('-------97 scope----------');
const  succ='123456';
const user = {
    nameUser: 'Вася',
    roles: [],
    login: 'asdf',
    pass: '12345'


};

function addRole(user,role) {
    console.log(succ);

    if (role == 'admin'){
        const message = 'Ошибка';
        console.log(message);
        return user;
    }
user.roles.push(role);
return user;

}

console.log(addRole(user,'admin'));
console.log('----------------------');

const user104 = {
    name104: 'Misha',
    fio104: 'Hliebov',
    age: 51,
    logFio: function(){
        console.log( `${this.name104}` +` ` + `${this.fio104}`);
       
    },
    logFio2: () => {
        console.log( `${this.name104}` +` ` + `${this.fio104}`);
       
    }

}

user104.logFio();

//user104.logFio2(); //  в стрелочных ф-ях нет ЗИС
console.log('---106-----------------');
const company={
    name4: 'OOO KV',
    sotrud: [
        {
            name4: 'serg',
            name24: function(){
                return this.name4;
            }
        },
    ],


    ceo: {
        name4: 'Vasy',
        name24: function(){
            console.log(`${this.name4}`);
            
        },
    },
    name24: function(){
        console.log(`${this.name4}`);
    }
    
   
}


company.name24();
company.ceo.name24(); 
console.log(company.sotrud.map(sotrud => sotrud.name24()));

console.log('---105 arguments------------------');

function sumNum(num1,num2){
    console.log(this);
    console.log(arguments); 
    console.log('perviy =' +  arguments[0]); 
    return num1+num2;
}

console.log(sumNum(3,5,1,2));

const sumNum2 = (num1,num2) => {
    console.log(this);
    //console.log(arguments); 
    return num1+num2;
}
console.log(sumNum2(3,5,1,2));

console.log('----------107 oel----------------');

const b =5;

const a = {
    b,
    getB: function(){
        return this.b;
    },

    getB2(){
        return this.b;
    }
}
console.log(a.getB());
console.log(a.getB2());


console.log('----------108 call apply----------------');

const audi = {
    make: 'audi',
    model: 'a3',
    year: 2021,
    damages:[],
    addDam(part, rate){
        console.log(`У авто ${this.make }
        ${this.model }
        ${this.year } добавлено
        ${part} степень ${rate } `);
        
        this.damages.push(
            {part, rate}
        )

    }
}
audi.addDam('капот',1);
const bmv = {
    make: 'bm',
    model: 'ax5',
    year: 1998,
    damages:[]
}
bmv.addDam = audi.addDam;
bmv.addDam('bamp',2); 

const addOll = audi.addDam;
addOll.call(bmv,'dfg',2);
addOll.apply(bmv,['крыло',3]);

console.log('----------109 bind ----------------');
console.log('----------110  упражнение ----------------');

function removePassword(reset){
    if(reset){
        this.pass = undefined;
    } else {
        this.pass = '1';
    }
}

const resetUserPass = removePassword.bind(user, true);
resetUserPass();
console.log(user);
console.log('----------111  IIFE ----------------');
// функция  стартует 1 раз
(function(){
    console.log('start1 raz');
})();

console.log('----------112  замыкание----------------');

function changeBal(){
    let balance = 0;
    return function(sum){
        balance += sum;
        console.log(`баланс: ${balance}`)
    }
}
const change = changeBal();
change(100);
change(-50);
change(200);
console.dir(change);
const change2 = changeBal();
change2(100);

console.log('----------113  замыкание--пример-------');
const userInfo = {
    balance: 0,
    operations: 0,
    increse(sum){
        this.balance += sum;
        this.operations ++;
    }
}
function userM(){
    const userObj = userInfo;
    return function(){
        return userObj;
    }
}

const user1 = userM();
user1().increse(100);
user1().increse(100);
console.log(user1());




