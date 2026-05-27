import { Paciente } from "../models/paciente.models";

export const getPaciente = async () => {
    return await Paciente.findAll();
}

export const getPacienteId = async (id: number) => {
    const paciente = await Paciente.findByPk(id);
    if (!paciente) {
        throw new Error("Paciente no encontrado");
    }
    return paciente;
}

export const createPaciente = async (nombre: string, telefono: string) => {
    const paciente = await Paciente.create({ nombre, telefono });
    return paciente;
}

export const updatePaciente = async (id: number, nombre: string, telefono: string) => {
    const paciente = await Paciente.findByPk(id);
    if (!paciente) {
        throw new Error("Paciente no encontrado");
    }
    await paciente.update({ nombre, telefono });
    return paciente;
}

export const deletePaciente = async (id: number) => {
    const paciente = await Paciente.findByPk(id);
    if (!paciente) {
        throw new Error("Paciente no encontrado");
    }
    await paciente.destroy();
    return;
}