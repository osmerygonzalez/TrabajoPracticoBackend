"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./config/db");
const usuarioController_1 = require("./controllers/usuarioController");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, db_1.connectdb)();
    // Crear
    //await crearUsuario({
    //nombre: "Lola Maria Paez Sanchez",
    //email: "lola@gmail.com",
    //edad: 32,
    //activo: true,
    //});
    // Leer
    yield (0, usuarioController_1.obtenerUsuarios)();
    //const id = "67fff6d99b0f18ce6c65786c";
    //await obtenerUsuarioPorId();
    //await actualizarUsuario();
    //await eliminarUsuario();
});
main();
