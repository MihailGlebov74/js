console.log('---114  Doom------------------');
let o = {x: 1, y: {z: 3}};
let a = [o, 4, [5,6]];
console.log('прикинь:' + a[0].x);

let q = {x:1, y:2, z:3};
let key = "";
for (let k of Object.keys(q)){
    key += k;
}
console.log (key);

let sum = 0;
for (let v of Object.values(q)){
    sum += v;
}
console.log (sum);

let rez = "";
for (let [k,v] of Object.entries(q)){
    rez += k+v;
}
console.log (rez);