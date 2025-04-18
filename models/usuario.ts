import mongoose, { Schema, Document } from "mongoose";

export interface IUsuario extends Document {
    nombre: string;
    email: string;
    edad: number;
    activo: boolean;
    creadoEn: Date;
}

const UsuarioSchema: Schema = new Schema({
    nombre: { type: String, required: true },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
    },
    edad: { type: Number, required: true, min: 18 },
    activo: { type: Boolean, default: true },
    creadoEn: { type: Date, default: Date.now },
});

export default mongoose.model<IUsuario>("Usuario", UsuarioSchema);