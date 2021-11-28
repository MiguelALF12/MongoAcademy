import { ProjectModel } from "../models/project";
import { UserModel } from "../models/user";

const resolvers = {
    Query: {
        Usuarios: async (parent, args) => {
            const usuarios = await UserModel.find();            
            return usuarios;
        },
        Usuario: async(parent,args)=>{
            const usuario = await UserModel.findOne({_id:args._id});
            return usuario;
        },
        Proyectos: async (parent,args)=>{
            const proyectos = await ProjectModel.find();
            return proyectos;
        },
    },

    Mutation: {
        crearUsuario: async (parent, args)=>{
            const usuarioCreado = await UserModel.create({
                nombre: args.nombre,
                apellido: args.apellido,
                identificacion: args.identificacion,
                correo: args.correo,
                rol: args.rol,
            });

            if(Object.keys(args).includes('estado')){
                usuarioCreado.estado = args.estado;
            }
            return usuarioCreado;
        },

        editarUsuario: async(parent,args)=>{
            const usuarioEditado= await UserModel.findByIdAndUpdate(args._id,{
                nombre: args.nombre,
                apellido: args.apellido,
                identificacion: args.identificacion,
                correo: args.correo,
                estado: args.estado,
                rol: args.rol,
            });
            return usuarioEditado;
        },

        eliminarUsuario: async(parent,args)=>{
            if(Object.keys(args).includes('_id')){
                const usuarioEliminado = UserModel.findOneAndDelete({_id:args._id});
                return usuarioEliminado;
            }else if(Object.keys(args).includes('correo')){
                const usuarioEliminado = UserModel.findOneAndDelete({correo:args.correo});
                return usuarioEliminado;
            }
        }
    }
};

export { resolvers };