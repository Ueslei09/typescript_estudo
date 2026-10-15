"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dias;
(function (dias) {
    dias[dias["segunda"] = 1] = "segunda";
    dias[dias["terca"] = 2] = "terca";
    dias[dias["quarta"] = 3] = "quarta";
    dias[dias["quinta"] = 4] = "quinta";
    dias[dias["sexta"] = 5] = "sexta";
    dias[dias["sabado"] = 6] = "sabado";
    dias[dias["domingo"] = 0] = "domingo";
})(dias || (dias = {}));
console.log(dias.terca);
console.log(dias['domingo']);
console.log(dias[6]);
const d = new Date();
console.log(d);
console.log(d.getDay());
console.log(dias[d.getDay()]);
var cores;
(function (cores) {
    cores["branco"] = "#fff";
    cores["preto"] = "#000";
    cores["verde"] = "#0f0";
})(cores || (cores = {}));
console.log(cores.branco);
console.log(cores['preto']);
var TipoUsusario;
(function (TipoUsusario) {
    TipoUsusario[TipoUsusario["USER"] = 0] = "USER";
    TipoUsusario[TipoUsusario["ADMIN"] = 1] = "ADMIN";
    TipoUsusario[TipoUsusario["SUPERADMIN"] = 2] = "SUPERADMIN";
})(TipoUsusario || (TipoUsusario = {}));
console.log(TipoUsusario.USER, TipoUsusario.ADMIN, TipoUsusario.SUPERADMIN);
const tp = TipoUsusario.ADMIN;
console.log(tp);
