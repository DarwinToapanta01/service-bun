import type { FastifyInstance } from "fastify";
import { createPaciente, getPacienteId, deletePaciente, getPaciente, updatePaciente } from "../controllers/paciente.controller";

export const pacienteRoutes = async (app: FastifyInstance) => {
    app.get("/pacientes", getPaciente);

    app.get("/pacientes/:id", async (req, reply) => {
        try {
            const { id } = req.params as any;
            return await getPacienteId(Number(id));
        } catch (error) {
            console.error(error);
            reply.status(404).send({ error: "No se pudo obtener el paciente" });
        }
    });

    app.post("/pacientes", async (req, reply) => {
        try {
            const paciente = req.body as any;
            return await createPaciente(paciente.nombre, paciente.telefono);
        } catch (error) {
            console.error(error);
            reply.status(404).send({ error: "No se pudo crear el paciente" });
        }
    });

    app.put("/pacientes/:id", async (req, reply) => {
        try {
            const { id } = req.params as any;
            const paciente = req.body as any;
            return await updatePaciente(Number(id), paciente.nombre, paciente.telefono);
        } catch (error) {
            console.error(error);
            reply.status(404).send({ error: "No se pudo actualizar el paciente" });
        }
    });

    app.delete("/pacientes/:id", async (req, reply) => {
        try {
            const { id } = req.params as any;
            return await deletePaciente(Number(id));
        } catch (error) {
            console.error(error);
            reply.status(404).send({ error: "No se pudo eliminar el paciente" });
        }
    });
}