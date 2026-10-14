const numeros: number[] = [];
const numeral:Array<number | string> = [];

numeral.push(1,2,3,4,5,6,7,8,9,10);
numeral.unshift('A');
numeral.pop();
numeral.shift();
console.log(numeral);

numeros.push(20,30,40);
console.log(numeros);


const numeros_ro:ReadonlyArray<number> = [100,300,500]
console.log(numeros_ro);
 