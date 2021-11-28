enum Enum_Rol{
    ESTUDIANTE = 'ESTUDIANTE',
    LIDER= 'LIDER',
    ADMINISTRADOR = 'ADMINISTRADOR',
}

enum Enum_EstodoUsuario{
    PENDIENTE = 'PENDIENTE',
    AUTORIZADO = 'AUTORIZADO',
    NO_AUTORIZADO = 'NO_AUTORIZADO',
}

enum Enum_EstdoProyecto{
    ACTIVO = 'ACTIVO',
    INACTIVO = 'INACTIVO',
}

enum Enum_FaseProyecto{
    INICIADO = 'INICIADO',
    DESARROLLO = 'DESARROLLO',
    TERMINADO = 'TERMINADO',
    NULO = '',
}

enum Enum_TipoObjetivo{
    GENERAL = 'GENERAL',
    ESPECIFICO = 'ESPECIFICO',
}

enum Enum_EstadoInscripcion{
    aceptada = 'Aceptada',
    rechazada = 'Rechazada',
}


export {Enum_Rol, Enum_EstodoUsuario, Enum_EstdoProyecto, 
    Enum_FaseProyecto, Enum_TipoObjetivo, Enum_EstadoInscripcion,
};