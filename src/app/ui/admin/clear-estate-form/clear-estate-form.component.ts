import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Notification } from 'src/app/model/notification.model';
import { Estate } from 'src/app/model/estate.model';
import { DomSanitizer } from '@angular/platform-browser';

import { Entity } from 'src/app/model/entity.model';
import { UserService } from 'src/app/data/components/user/services/user.service';

@Component({
  selector: 'app-clear-estate-form',
  templateUrl: './clear-estate-form.component.html',
  styleUrls: ['./clear-estate-form.component.css']
})
export class ClearEstateFormComponent implements OnInit {

  constructor(private _sanitizer: DomSanitizer, private api: DataService, private route: ActivatedRoute, private router: Router) { }

  EntityUuid='';
  estate:Entity = new Entity;
  notif :Notification = new Notification ();
  imagePaths:any[] = [];
  routingSubscription: any;
  errors = [];
 
  src: any;
  ngOnInit() {

    this.routingSubscription =
    this.route.params.subscribe(params => {
    if (params.uuid) {
      this.EntityUuid = params.uuid;
      this.api.getEntity(params.uuid)
      .subscribe(
        (e)=> {this.estate = e ;
          this.notif.notif_title = this.estate.properties.title;
          if(this.estate.properties.image){
          for(let image of this.estate.properties.image) {
            if(image){
              this.imagePaths.push('data:image/jpg;base64,' +
              (this._sanitizer.bypassSecurityTrustResourceUrl(image) as any).changingThisBreaksApplicationSecurity);
            }
          }}
          console.log(this.imagePaths);
        },
        (error) => console.log(error)
    );
    }
  });
  }

  private handleError(error){
    this.errors = [];
    if(error.status === 400) {
      if(error.error.error.children === undefined){
        this.errors.push(error.error.error);
      }else{
        for (const value in error.error.error.children) {
          if (value === 'password') {
            this.errors.push(value+" : "+error.error.error.children[value].children.first.errors);
          } else {
            this.errors.push(!Array.isArray(error.error.error.children[value]) ? value+" : "+error.error.error.children[value].errors : undefined);
          }

        }
      }
    }
  }

  sendNotif(){
    this.api.deleteEntity(this.EntityUuid).subscribe(
      (data) => {
        this.api.addEntity(this.notif.patchableSpecific(), 'notification').subscribe(
          (data) => {
            this.router.navigate(['/admin-annonces'])
          },
          (error) =>  this.handleError(error)
        )
      ;
      },
      (error) => this.handleError(error)
    )
  ;
    

}

}
