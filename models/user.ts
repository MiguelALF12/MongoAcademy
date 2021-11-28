import { Schema, model } from "mongoose";
import {Enum_Rol, Enum_EstodoUsuario} from "./enums";


interface User{
    correo:string;
    identificacion: string;
    nombre: string;
    apellido: string;
    rol: Enum_Rol;
    estado: Enum_EstodoUsuario;
}

const userSchema = new Schema<User>({
    correo:{
        type: String,
        required: true,
        unique: true,
        validate:{
            validator: (email) => {
                if(email.includes('@') && email.includes('.')){
                    return true;
                }else{
                    return false;
                }
            },
        },
    },
    identificacion:{
        type: String,
        required: true,
        unique: true,
    },
    nombre:{
        type: String,
        required: true,
    },
    apellido:{
        type: String,
        required: true,
    },
    rol:{
        type: String,
        required: true,
        enum: Enum_Rol,
    },
    estado:{
        type: String,
        enum: Enum_EstodoUsuario,
        default: Enum_EstodoUsuario.PENDIENTE,
    },
});

const UserModel = model('User', userSchema);

export { UserModel };