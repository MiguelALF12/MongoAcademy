import { Schema, model } from "mongoose";
import { Enum_EstdoProyecto, Enum_FaseProyecto, Enum_TipoObjetivo } from "./enums";
import { ObjectiveModel } from "./objetivo";
import { UserModel } from "./user";

interface Project{
    nombre: string;
    presupuesto: number;
    fechaInicio: Date;
    fechaFin: Date;
    estado: Enum_EstdoProyecto;
    fase: Enum_FaseProyecto;
    lider: Schema.Types.ObjectId;
    objetivos: [{ descripcion:String, tipo: Enum_TipoObjetivo}];
}

const projectSchema = new Schema<Project>({
    nombre: {
        type: String,
        required: true,
    },
    presupuesto: {
        type: Number,
        required: true,
    },
    fechaInicio: {
        type: Date,
        required: true,
    },
    fechaFin: {
        type: Date,
        required: true,
    },
    estado: {
        type: String,
        enum: Enum_EstdoProyecto,
        default: Enum_EstdoProyecto.INACTIVO
    },
    fase: {
        type: String,
        enum: Enum_FaseProyecto,
        default: Enum_FaseProyecto.NULO
    },
    lider: {
        type: Schema.Types.ObjectId,
        require: true,
        ref: UserModel,
    },
    objetivos: [
        {
            descripcion: {
               type: String,
               required: true,     
            },
            tipo: {
                type: String,
                enum: Enum_TipoObjetivo,
                required: true,
            },
        }
    ]
});

const ProjectModel = model('Proyecto', projectSchema);

export { ProjectModel };

