import { Component, OnInit } from '@angular/core';
import { Estate } from 'src/app/model/estate.model';
import { FormGroup } from '@angular/forms';
import { DataService } from 'src/app/data/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';


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

    title = 'Angular File Upload';

    constructor(private api: DataService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
      this.estate = new Estate();
      this.getUtilities();

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
        this.estate.properties.utilities.push(service);
      } else if (!event.target.checked) {
        let index = this.utilities[service];
        this.utilities.splice(index, 1);
      }
      console.log(this.estate.properties.utilities);
    }

    updateEnv(service: any, event) {
      console.log(service, event, "Selected");
      if (event.target.checked) {
        this.estate.properties.environment.push(service);
      } else if (!event.target.checked) {
        let index = this.environments[service];
        this.environments.splice(index, 1);
      }
      console.log(this.estate.properties.environment);
    }

     save(value: any) {
       console.log(value);
     }
  //     this.isPosted = true;
  //     this.api.addEntity(this.estate.cleanEstate(), 'estate')
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //       },
  //       error => {
  //         // tslint:disable-next-line: no-conditional-assignment
  //         if (error.status = 409) {
  //           this.entityUuid = error.error.context.uuid;
  //           console.log( error.status  + ':' +  error.error.context.uuid);
  //           this.isPosted = true;
  //         }
  //       }
  //     );
  //   }
  //   cancel() {
  //     this.router.navigate(['/']);
  //   }

  //   uploadSubmit() {
  //     // tslint:disable-next-line: prefer-for-of
  //     for (let i = 0; i < this.uploader.queue.length; i++) {
  //       const fileItem = this.uploader.queue[i]._file;
  //       if (fileItem.size > 10000000) {
  //         alert('Each File should be less than 10 MB of size.');
  //         return;
  //       }
  //     }
  //     const data = new FormData();
  //     for (let j = 0; j < this.uploader.queue.length; j++) {
  //       // tslint:disable-next-line: no-shadowed-variable
  //       const data = new FormData();
  //       const fileItem = this.uploader.queue[j]._file;
  //       console.log(fileItem.name);
  //       data.append('file', fileItem);
  //       data.append('fileSeq', 'seq' + j);
  //       data.append( 'dataType', this.uploadForm.controls.type.value);
  //       // tslint:disable-next-line: no-shadowed-variable
  //       this.uploadFile(data).subscribe(data => alert(data.message));
  //     }
  //     this.uploader.clearQueue();


  // }

  // uploadFile(data: FormData): Observable<any> {
  //   return this.api.addItem(`entity/${this.entityUuid}/image`, data);
  //   }

  //   validate() {
  //     this.router.navigate(['/estate', this.entityUuid]);
  //   }


}
