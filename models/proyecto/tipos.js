import { gql } from "apollo-server-core";


const tiposProyecto = gql`

    type Objetivo{
        _id: ID!
        descripcion: String!
        tipo: Enum_TipoObjetivo!
    }

    input crearObjetivo{
        descripcion: String!
        tipo: Enum_TipoObjetivo!
    }

    type Proyecto{
        _id: ID!    
        nombre: String!
        presupuesto: Float!
        fechaInicio: Date!
        fechaFin: Date!
        estado: Enum_EstdoProyecto!
        fase: Enum_FaseProyecto!
        lider: Usuario!
        objetivos: [Objetivo]
        avances: [Avance]
        inscripciones: [Inscripcion]
    }

    type Query {
        Proyectos: [Proyecto]
    }

    type Mutation{
        crearProyecto(
            nombre: String!
            presupuesto: Float!
            fechaInicio: Date!
            fechaFin: Date!
            estado: Enum_EstdoProyecto!
            fase: Enum_FaseProyecto!
            lider: String!
            objetivos: [crearObjetivo]  
        ):Proyecto
    }
`;

export { tiposProyecto };