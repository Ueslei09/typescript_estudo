enum dias {
    segunda = 1,
    terca = 2,
    quarta = 3,
    quinta = 4 ,
    sexta = 5,
    sabado = 6,
    domingo = 0
}

console.log(dias.terca);
console.log(dias['domingo']);
console.log(dias[6]);

const d= new Date();
console.log(d);
console.log(d.getDay());
console.log(dias[d.getDay()]);

enum cores{
    branco = '#fff',
    preto = '#000',
    verde = '#0f0',
}

console.log(cores.branco);
console.log(cores['preto']);

enum TipoUsusario{
    USER,
    ADMIN,
    SUPERADMIN
}

console.log(TipoUsusario.USER, TipoUsusario.ADMIN, TipoUsusario.SUPERADMIN);

const tp:TipoUsusario = TipoUsusario.ADMIN;
console.log(tp);