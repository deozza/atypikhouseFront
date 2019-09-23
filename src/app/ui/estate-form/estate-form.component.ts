import { Component, OnInit } from '@angular/core';
import { Estate } from 'src/app/model/estate.model';
import { DataService } from 'src/app/data/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FileUploader} from 'ng2-file-upload';
import { from } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-estate-form',
  templateUrl: './estate-form.component.html',
  styleUrls: ['./estate-form.component.css']
})
export class EstateFormComponent implements OnInit {
  errors: any[] = [];
  error= false;
  estate: Estate;
  isPosted = false;
  enumerations:any= [];
  entityUuid = '';
  uploadForm: FormGroup;
  routingSubscription: any;
  utilities: any[];
  categories: any[];
  environments: any[];
  photo:Blob[] = [];
  changed = false;
  isSaved= false;


  
  public uploader: FileUploader = new FileUploader({
    isHTML5: true
  });



    constructor(private api: DataService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { }

    ngOnInit() {
     
      this.estate = new Estate();
      this.getUtilities();
      this.uploadForm = this.fb.group({
        document: [null, null],
        type:  [null, Validators.compose([Validators.required])]
      });

    }
     getUtilities() {
      this.api.getList().subscribe( list =>{
        this.enumerations = list;
        this.utilities = this.enumerations.enumerations.utilities;
        this.categories = this.enumerations.enumerations.categories;
        this.environments = this.enumerations.enumerations.environment;

      });
     }
     updateUtil(service: any, event) {
      if (event.target.checked) {
        this.estate.utilities.push(service);
      } else if (!event.target.checked) {
        let index = this.utilities[service];
        this.estate.utilities.splice(index, 1);
      }

    }

    updateEnv(service: any, event) {
      if (event.target.checked) {
        this.estate.environment.push(service);
      } else if (!event.target.checked) {
        let index = this.environments[service];
        this.estate.environment.splice(index, 1);
      }

    }

     save() {
        this.changed = true;
        this.api.addEntity(this.estate.cleanEstate(), 'estate')
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          if (error.status == 409) {
            this.entityUuid = error.error.context.uuid;
            this.isPosted = true;
          }
          else {
            this.error = true;
            Object.entries(error.error.error.children).forEach(
               ([cle, value]) => {
                 Object.entries(value).forEach(
                ([key, value]) => {
                this.errors[cle] = value[0];
                 }
                );
               }
              );
            console.log(this.errors)
          }
        }
      );
    }
   
    uploadSubmit() {
      for (let i = 0; i < this.uploader.queue.length; i++) {
        const fileItem = this.uploader.queue[i]._file;
        if (fileItem.size > 10000000) {
          alert('Each File should be less than 10 MB of size.');
          return;
        }
      }

      for (let j = 0; j < this.uploader.queue.length; j++) {
        const fileItem = this.uploader.queue[j]._file;
        this.photo.push(fileItem);

      }

      for (let photo of this.photo ) {
        this.uploadF(photo);
      }
      this.uploader.clearQueue();
  }

  uploadF(data: Blob){
    return this.api.postFile(this.entityUuid, 'image', data).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);

      });
    }

    validate() {
    this.isSaved = true;
    }

    getClass(){
      return 'errorClass';
    }

    getStatus(str: string) {
      return this.errors.hasOwnProperty(str);
    }



}
