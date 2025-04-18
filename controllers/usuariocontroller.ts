import UsuarioModel, { IUsuario } from "../models/Usuario";

// Crear un nuevo usuario
const crearUsuario = async (usuaNuevo: Partial<IUsuario>) => {
    try {
        const nuevoUsuario = new UsuarioModel(usuaNuevo);
        await nuevoUsuario.save();
        console.log("Usuario creado");
    } catch (error) {
        console.error("Error al crear el usuario:", error);
    }
};

// Obtener todos los usuarios
const obtenerUsuarios = async () => {
    try {
        const usuarios = await UsuarioModel.find();
        console.log("Usuarios:", usuarios);
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
    }
};

// Obtener un usuario por ID
const obtenerUsuarioPorId = async (id: string) => {
    try {
        const usuario = await UsuarioModel.findById(id);
        if (!usuario) {
            console.log("Usuario no encontrado...");
        } else {
            console.log("Usuario:", usuario);
        }
    } catch (error) {
        console.error("Error al obtener el usuario:", error);
    }
};

// Actualizar un usuario
const actualizarUsuario = async (id: string, body: Partial<IUsuario>) => {
    try {
        const usuarioActualizado = await UsuarioModel.findByIdAndUpdate(id, body, { new: true });
        if (!usuarioActualizado) {
            console.log("Usuario no actualizado...");
        } else {
            console.log("Usuario actualizado:", usuarioActualizado);
        }
    } catch (error) {
        console.error("Error al actualizar el usuario:", error);
    }
};

// Eliminar un usuario
const eliminarUsuario = async (id: string) => {
    try {
        const usuarioEliminado = await UsuarioModel.findByIdAndDelete(id);
        if (!usuarioEliminado) {
            console.log("Usuario no encontrado para eliminar...");
        } else {
            console.log("Usuario eliminado");
        }
    } catch (error) {
        console.error("Error al eliminar el usuario:", error);
    }
};

export {
    crearUsuario,
    obtenerUsuarios,
    obtenerUsuarioPorId,
    actualizarUsuario,
    eliminarUsuario,
};