import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Estate } from '../model/estate.model';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FileUploader} from 'ng2-file-upload';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-estate',
  templateUrl: './add-estate.component.html',
  styleUrls: ['./add-estate.component.css']
})
export class AddEstateComponent implements OnInit {
estate: Estate;
isPosted = false;
utilities = [];
environments = [];
categories = [];
entityUuid = '';
uploadForm: FormGroup;
routingSubscription: any;
  public uploader: FileUploader = new FileUploader({
    isHTML5: true
  });
  title = 'Angular File Upload';

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.estate = new Estate();
    this.getUtilities();
    this.uploadForm = this.fb.group({
      document: [null, null],
      type:  [null, Validators.compose([Validators.required])]
    });
  }
   getUtilities() {
    this.api.getList('doc/enumerations', list => {
      this.utilities = list.enumerations.utilities;
      this.categories = list.enumerations.estate_category;
      this.environments = list.enumerations.environment;
    });
   }

   save() {
    this.isPosted = true;
    this.api.addItem('entity/estate', this.estate.cleanEstate())
    .subscribe(
      data => {
        console.log(data);
      },
      error => {
        // tslint:disable-next-line: no-conditional-assignment
        if (error.status = 409) {
          this.entityUuid = error.error.context.uuid;
          console.log( error.status  + ':' +  error.error.context.uuid);
          this.isPosted = true;
        }
      }
    );
  }
  cancel() {
    this.router.navigate(['/']);
  }

  uploadSubmit() {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.uploader.queue.length; i++) {
      const fileItem = this.uploader.queue[i]._file;
      if (fileItem.size > 10000000) {
        alert('Each File should be less than 10 MB of size.');
        return;
      }
    }
    const data = new FormData();
    for (let j = 0; j < this.uploader.queue.length; j++) {
      // tslint:disable-next-line: no-shadowed-variable
      const data = new FormData();
      const fileItem = this.uploader.queue[j]._file;
      console.log(fileItem.name);
      data.append('file', fileItem);
      data.append('fileSeq', 'seq' + j);
      data.append( 'dataType', this.uploadForm.controls.type.value);
      // tslint:disable-next-line: no-shadowed-variable
      this.uploadFile(data).subscribe(data => alert(data.message));
    }
    this.uploader.clearQueue();


}

uploadFile(data: FormData): Observable<any> {
  return this.api.addItem(`entity/${this.entityUuid}/image`, data);
  }

  validate() {
    this.router.navigate(['/estate', this.entityUuid]);
  }

}
