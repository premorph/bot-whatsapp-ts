import { Application } from 'express'
 export interface ServerConfig{
    app:Application;
    port:string|undefined;
    initialized():void;
    route():void;
    config():void;
    db():void;
}