import { Injectable, OnModuleInit, OnApplicationShutdown } from '@nestjs/common';

@Injectable()
export class DatabaseService {
    private isConnected: boolean = false;

    // service jab load ho jaye gi 
    onModuleInit(){
        this.isConnected = true;
        console.log("Database connected");

    }

    // jab shutdown ho jaye gi 
    onApplicationShutdown(signal: string){
        // signal btata k application q close huwi / shutdown hui
        this.isConnected = false;
        console.log(`Database disconnected due to shutdown. Signal ${signal}`)
    }

    getStatus(){
        // ye lifecycle hook ni woh always on se shuru hote
        // controller ko status de skte hain 
        return this.isConnected ? 'Connected' : 'Disconnected';
    }
}
