"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Curso {
    canal;
    curso;
    // Adicionando os tipos string (ou outro tipo que você esteja usando)
    constructor(canal, curso) {
        this.canal = canal;
        this.curso = curso;
    }
}
let c1 = new Curso('moover', 'typescript');
console.log(`Olá, seja bem-vindo ao canal ${c1.canal} e ao curso de ${c1.curso}`);
//# sourceMappingURL=aula003.js.map