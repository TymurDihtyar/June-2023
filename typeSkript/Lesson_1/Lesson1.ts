// ===================================== TASK 1 ================================================== //
{
    let a:string = 'hello';
    let b:string = 'owu';
    let c:string = 'com';
    let d:string = 'ua';
    let e:number = 1;
    let f:number = 10;
    let g:number = -999;
    let h:number = 123;
    let i:number = 3.14;
    let j:number = 2.7;
    let k:number = 16;
    let l:boolean = true;
    let m:boolean = false;
    console.log(a, b, c, d, e, f, g, h, i, j, k, l, m);
}
// ======================================= TASK 2 ================================================ //

let firstName:string = 'Tymur';
let middleName:string = 'Oleksandrovich';
let lastName :string = 'Dihtyar';
let person:string = `${firstName} ${middleName} ${lastName}`;
console.log (person);

// ======================================== TASK 3 =============================================== //
{
let a:number = 100;
console.log (typeof a);
let b:string = '100';
console.log (typeof b);
let c:boolean = true;
console.log (typeof c);
}
// ========================================= TASK 4 ============================================== //
{
    let firstName:string = prompt('Enter your firstName');
    let lastName :string = prompt('Enter your lastName');
    let age :number = +prompt('Enter your age');
    let person:string = `${firstName} ${lastName} ${age}`;
    console.log (person);
}
