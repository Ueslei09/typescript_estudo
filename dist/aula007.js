"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coisas = [1, 2, 'corda', true];
coisas[0] = 100;
coisas.push(200, 300, 'teste', false);
console.log(coisas);
console.log(coisas[0]);
