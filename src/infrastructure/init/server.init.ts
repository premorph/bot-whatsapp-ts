import express,{  Application } from "express";
import { ServerConfig } from "~domain/config/server.config";
import routes from "~infrastructure/route/"
import * as env from "./enviroment.init";
import cors from 'cors'
export class Server implements ServerConfig {
    app: Application=express();
    port: string | undefined = env.Port;
    constructor(){
        this.config()
        this.db()
        this.route()
    }
    initialized(): void {
        this.app.listen(this.port,()=> console.log(`Ready ... ${this.port}`))
    }
    route(): void {
        this.app.use("/api/v1",routes)
    }
    config(): void {
        this.app.use(express.json())
        this.app.use(cors())
    }
    db(): void {
        
    }
    
}