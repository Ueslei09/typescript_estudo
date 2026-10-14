"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Curso {
    canal;
    curso;
    nome;
    // Adicionando os tipos string (ou outro tipo que você esteja usando)
    constructor(canal, curso, nome) {
        this.canal = canal;
        this.curso = curso;
        this.nome = nome;
    }
}
let c1 = new Curso('moover', 'typescript', 'curso de typescript');
console.log(`Olá, seja bem-vindo ao canal ${c1.canal}, ao curso de ${c1.curso} e ao nome ${c1.nome}`);
