import { gql } from "apollo-server-core";


const tiposUsuario = gql`

    type Usuario {
        _id: ID!
        nombre: String!
        apellido: String!
        identificacion: String!
        correo: String!
        estado: Enum_EstadoUsuario
        rol: Enum_Rol!
    }

    type Query {
        Usuarios: [Usuario]
        Usuario(_id:String!):Usuario
    }

    type Mutation{
        crearUsuario(
            nombre: String!
            apellido: String!
            identificacion: String!
            correo: String!
            estado: Enum_EstadoUsuario
            rol: Enum_Rol!
            password: String!
        ):Usuario

        editarUsuario(
            _id: String!
            nombre: String!
            apellido: String!
            identificacion: String!
            correo: String!
            estado: Enum_EstadoUsuario!
        ):Usuario

        eliminarUsuario(
            _id: String, 
            correo: String 
        ):Usuario
    }
`;

export { tiposUsuario };