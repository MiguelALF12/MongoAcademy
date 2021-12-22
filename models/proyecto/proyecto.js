import mongoose from "mongoose";
// import { Enum_EstdoProyecto, Enum_FaseProyecto, Enum_TipoObjetivo } from "../enums/enums.js";
import { ObjectiveModel } from "../objetive.js";
import { UserModel } from "../usuario/usuario.js";

const {Schema,model} = mongoose;

// interface Project{
//     nombre: string;
//     presupuesto: number;
//     fechaInicio: Date;
//     fechaFin: Date;
//     estado: Enum_EstdoProyecto;
//     fase: Enum_FaseProyecto;
//     lider: Schema.Types.ObjectId;
//     objetivos: [{ descripcion:String, tipo: Enum_TipoObjetivo}];
// }

const projectSchema = new Schema({
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
        enum: ["ACTIVO", "INACTIVO"],
        default: "INACTIVO",
    },
    fase: {
        type: String,
        enum: ["INICIADO", "DESARROLLO", "TERMINADO", "NULO"],
        default: "NULO",
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
                enum: ["GENERAL", "ESPECIFICO"],
                required: true,
            },
        }
    ]
},
{
    toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
    toObject: { virtuals: true },
},
);

projectSchema.virtual('avances', {
    ref: 'Avance',
    localField: '_id',
    foreignField: 'proyecto',
});

projectSchema.virtual('inscripciones', {
    ref: 'Inscripcion',
    localField: '_id',
    foreignField: 'proyecto',
});

const ProjectModel = model('Proyecto', projectSchema);

export { ProjectModel };

