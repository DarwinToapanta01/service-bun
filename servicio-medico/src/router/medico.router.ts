import type { FastifyInstance } from "fastify";
import { 
    crearMedico, 
    obtenerMedicos, 
    obtenerMedicosId, 
    eliminarMedico, 
    actualizarMedico
} from "../controllers/medico.controller";

export const medicoRouter = (app: FastifyInstance)=>{
    app.get("/medicos",obtenerMedicos);
    app.get("/medicos/:id", async(req, reply)=>{
        try{
            const {id} = req.params as any;
            return await obtenerMedicosId(id);
        }catch(error){
            console.log(error);
            reply.code(404).send({error:"No se encontró médicos"})
        }
    });
    app.post("/medicos", async(req, reply)=>{
        try{
            const medico = req.body;
            return await crearMedico(medico);
        }catch(error){
            console.log(error);
            reply.code(404).send({error:"No se ha podido guardar médico"})
        }
    });

    app.put("/medicos/:id", async(req, reply)=>{
        try{
            const {id} = req.params as any;
            const medico = req.body;
            await actualizarMedico(id, medico);
            reply.code(201).send({mensaje:"Registro Exitoso"})
        }catch(error){
            console.log(error);
            reply.code(404).send({error:"No se encontró médicos"})
        }
    });

    app.delete("/medicos/:id", async(req, reply)=>{
        try{
            const {id} = req.params as any;
            return await eliminarMedico(id);
        }catch(error){
            console.log(error);
            reply.code(404).send({error:"No se encontró médicos"})
        }
    });
}
