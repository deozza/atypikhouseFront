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
        console.log(this.enumerations);
      });
     }
     updateUtil(service: any, event) {
      console.log(service, event, "Selected");
      if (event.target.checked) {
        this.estate.utilities.push(service);
      } else if (!event.target.checked) {
        let index = this.utilities[service];
        this.estate.utilities.splice(index, 1);
      }
      console.log(this.estate.utilities);
    }

    updateEnv(service: any, event) {
      console.log(service, event, "Selected");
      if (event.target.checked) {
        this.estate.environment.push(service);
      } else if (!event.target.checked) {
        let index = this.environments[service];
        this.estate.environment.splice(index, 1);
      }
      console.log(this.estate.environment);
    }

     save() {
       console.log(this.estate.cleanEstate());
      this.isPosted = true;
      this.api.addEntity(this.estate.cleanEstate(), 'estate')
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          if (error.status = 409) {
            this.entityUuid = error.error.context.uuid;
            console.log( error.status  + ':' +  error.error.context.uuid);
            this.isPosted = true;
          }
        }
      );
    }
    onFileSelected(file: Blob){
      this.photo.push(file);
    }

    uploadFile() {
      for (let photo of this.photo )
      {this.api.postFile(this.entityUuid, 'image', photo)
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
            console.log( error.status  );
        }
      );
    }}

    uploadSubmit() {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.uploader.queue.length; i++) {
        const fileItem = this.uploader.queue[i]._file;
        if (fileItem.size > 10000000) {
          alert('Each File should be less than 10 MB of size.');
          return;
        }
      }

      for (let j = 0; j < this.uploader.queue.length; j++) {

        const fileItem = this.uploader.queue[j]._file;
        console.log(fileItem.name);
        this.photo.push(fileItem);
        for (let photo of this.photo ) {
          this.uploadF(photo).subscribe(data => alert(data));
        }
      }
      this.uploader.clearQueue();
  }

  uploadF(data: Blob)  {
    return this.api.postFile(this.entityUuid, 'image', data);

    }

    validate() {
      this.router.navigate(['/estate', this.entityUuid]);
    }



}
