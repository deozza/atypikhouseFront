import { Estate } from './estate.model';
import {User} from './user.model';

export class Notification {
  uuid: string ;
  kind: string;
  owner: User;
  validation_state: string;
  last_update: string;
  date_of_creation: string; 
  notif_title:  string;
  content: string;

  public constructor(entity = null) {
    this.uuid = entity !== null ? entity.uuid : '';
    this.kind = entity !== null ? entity.kind : '';
    this.owner = entity !== null ? new User(entity.owner) : new User();
    this.validation_state = entity !== null ? entity.validation_state : '';
    this.last_update = entity !== null ? entity.last_update : '';
    this.date_of_creation = entity !== null ? entity.date_of_creation : '';  
    this.notif_title = entity !== null ? entity.content : ''; 
    this.content = entity !== null ? entity.content : '';    
  }

   public patchableSpecific() {

    let notification = new Notification(this);
    delete notification.uuid;
    delete notification.kind;
    delete notification.owner;
    delete notification.validation_state;
    delete notification.last_update;
    delete notification.date_of_creation;
    

    return notification;

  }

 }