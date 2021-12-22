import { gql } from "apollo-server-core";
import { tiposEnums } from "../models/enums/tipos.js";
import { tiposUsuario } from "../models/usuario/tipos.js";
import { tiposProyecto } from "../models/proyecto/tipos.js";
import { tiposAvances } from "../models/avance/tipos.js";
import { tiposInscripcion } from "../models/inscripcion/tipos.js";
import { tiposAutenticacion } from "./auth/tipos.js";

const tiposGlobales = gql`
    scalar Date
`;

export const tipos = [
    tiposGlobales, 
    tiposEnums, 
    tiposUsuario, 
    tiposProyecto, 
    tiposAvances, 
    tiposInscripcion,
    tiposAutenticacion,
];