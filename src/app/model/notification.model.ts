import { Estate } from './estate.model';
import {User} from './user.model';

export class Notification {
  
  
  notif_title:  string;
  content: string;

  public constructor(entity = null) {
   
  
    this.notif_title = entity !== null ? entity.content : ''; 
    this.content = entity !== null ? entity.content : '';    
  }

  public patchableSpecific() {

    let notification = {};
   
    notification["notif_title"]= this.notif_title;
    notification["content"]= this.content;
    

    return notification;

  }


 }