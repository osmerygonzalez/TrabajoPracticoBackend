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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarUsuario = exports.actualizarUsuario = exports.obtenerUsuarioPorId = exports.obtenerUsuarios = exports.crearUsuario = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
// Crear un nuevo usuario
const crearUsuario = (usuaNuevo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const nuevoUsuario = new usuario_1.default(usuaNuevo);
        yield nuevoUsuario.save();
        console.log("Usuario creado");
    }
    catch (error) {
        console.error("Error al crear el usuario:", error);
    }
});
exports.crearUsuario = crearUsuario;
// Obtener todos los usuarios
const obtenerUsuarios = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield usuario_1.default.find();
        console.log("Usuarios:", usuarios);
    }
    catch (error) {
        console.error("Error al obtener los usuarios:", error);
    }
});
exports.obtenerUsuarios = obtenerUsuarios;
// Obtener un usuario por ID
const obtenerUsuarioPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuario = yield usuario_1.default.findById(id);
        if (!usuario) {
            console.log("Usuario no encontrado...");
        }
        else {
            console.log("Usuario:", usuario);
        }
    }
    catch (error) {
        console.error("Error al obtener el usuario:", error);
    }
});
exports.obtenerUsuarioPorId = obtenerUsuarioPorId;
// Actualizar un usuario
const actualizarUsuario = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarioActualizado = yield usuario_1.default.findByIdAndUpdate(id, body, { new: true });
        if (!usuarioActualizado) {
            console.log("Usuario no actualizado...");
        }
        else {
            console.log("Usuario actualizado:", usuarioActualizado);
        }
    }
    catch (error) {
        console.error("Error al actualizar el usuario:", error);
    }
});
exports.actualizarUsuario = actualizarUsuario;
// Eliminar un usuario
const eliminarUsuario = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarioEliminado = yield usuario_1.default.findByIdAndDelete(id);
        if (!usuarioEliminado) {
            console.log("Usuario no encontrado para eliminar...");
        }
        else {
            console.log("Usuario eliminado");
        }
    }
    catch (error) {
        console.error("Error al eliminar el usuario:", error);
    }
});
exports.eliminarUsuario = eliminarUsuario;
