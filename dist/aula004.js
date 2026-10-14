"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nome = 'Uesle';
const sobrenome = 'Oliveira';
const idade = 30;
const cidade = 'São Paulo';
class Pessoa {
    nome;
    idade;
    cidade;
    sobrenome;
    constructor(nome, idade, cidade, sobrenome) {
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
        this.sobrenome = sobrenome;
    }
}
let pessoa1 = new Pessoa(nome, idade, cidade, sobrenome);
console.log(`Olá, meu nome é ${pessoa1.nome} ${pessoa1.sobrenome}, tenho ${pessoa1.idade} anos e moro em ${pessoa1.cidade}`);
let cor;
let numero = 1;
cor = 'vermelho';
console.log(`A cor é ${cor} e o número é ${numero}`);
