import { Component } from "@angular/core";
import { template } from '@angular/core/src/render3';
import { templateSourceUrl } from '@angular/compiler';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css',]
})
export class ServerComponent{
    serverName = '';
    allowNewSerer:boolean = false;
    serverId:String = "lsdjfldsjflj";
    serviceStatus:String = "this is offline";
    serverCreationStatus= "no server was created!";
    serverCreated = false;


    constructor(){
        setTimeout(()=>{
            this.allowNewSerer=true;
        },4000)
    }
    getServerId(){
        return this.serverId;
    }
    setServerId(serverid){
        this.serverId = serverid;
    }
    OnCreateServer(){
        this.serverCreated = true;
        this.serverCreationStatus = 'server was created'+this.serverName;
    }
    onUpdateServerName(event:any){
        console.log(event);
        this.serverName = event.target.value;
    }

}