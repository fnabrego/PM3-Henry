import { AppDataSource } from "./config/data-source";
import { PORT } from "./config/envs";
import server from "./servers/server";
import "reflect-metadata"

AppDataSource.initialize()
    .then(res=>{
        console.log('Conexion a base de datos: Exitosa')
        server.listen(PORT,()=>{
            console.log(`Server listening on port ${PORT}`);
        });
    })
