import { Component, OnInit } from '@angular/core';
import { Entity } from 'src/app/model/entity.model';
import { List } from 'src/app/model/list.model';
import { Pagination } from 'src/app/model/pagination.model';
import { DataService } from 'src/app/data/services/data.service';
import { Router } from '@angular/router';
import { Estate } from 'src/app/model/estate.model';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/data/components/user/services/user.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {

  user: User = new User;
  email: string;
 pagination: Pagination;
 message: string;
 estates:List<Entity>;
 constructor(private dataService: DataService, private api: UserService, private router: Router) { }

 ngOnInit() {
//get current user
  this.api.getUserCurrent()
  .subscribe(
    (e) => {
      this.user = e;
      this.user.email = this.email;
    },
    (error) => console.log(error)
  );

// get estates 
   this.estates = new List<Entity>() ;
   this.pagination = new Pagination();
   this.pagination.filters = {'like.owner.email' : this.email};
   this.pagination.count = 30;
   this.dataService.getEntities('estate', this.pagination.count, this.pagination.filters).subscribe(
       (e)=> {this.estates = e;
      },
       (error) => console.log(error)
   );
 }



 validateEstate(estate: Entity) {
   this.dataService.validateEntity(estate.uuid).subscribe(
     (t) => {
       alert("l'annonce est bien validée");
       this.router.navigate(['/admin-annonces']);
     },
     (error) => {
       if(error.status == 409) {
         this.router.navigate(['/crm']);
       }
       else
      console.log(error);
    }

   );
 }
 deleteFrom(estate: Estate){
   this.router.navigate(['/clearEstateForm', estate.uuid ])
 }
 goDetails(estate: Estate){
 this.router.navigate(['/estate', estate.uuid ])
 }

 getStatus(exp){
  if (exp.includes("published"))
  {
    return true
  }
 }

}
