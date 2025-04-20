import { connectdb } from "./config/db";
import {
    crearUsuario,
    obtenerUsuarios,
    obtenerUsuarioPorId,
    actualizarUsuario,
    eliminarUsuario,
} from "./controllers/usuarioController";

const main = async () => {
    await connectdb();

    // Crear
    await crearUsuario({
        //nombre: "Lola Maria Paez Sanchez",
        //email: "lola@gmail.com",
        //edad: 32,
        //activo: true,
    });

    // Leer
    await obtenerUsuarios();

    //const id = "67fff6d99b0f18ce6c65786c";
    //await obtenerUsuarioPorId();
    //await actualizarUsuario();
    //await eliminarUsuario();
};

main();