import { UserModel } from '../../models/usuario/usuario.js';
import bcrypt from 'bcrypt';

const resolversAutenticacion = {
    Mutation:{
        registro: async(parent,args) => {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(args.password, salt);
            const usuarioCreado = await UserModel.create({
                nombre: args.nombre,
                apellido: args.apellido,
                identificacion: args.identificacion,
                correo: args.correo,
                rol: args.rol,
                password: hashedPassword,
            });
            return "Usuario creado";
        },
    },
};

export { resolversAutenticacion };