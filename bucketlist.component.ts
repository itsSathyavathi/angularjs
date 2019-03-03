import { Component, OnInit } from '@angular/core';
import { WishListDataService } from '../service/data/wish-list-data.service';
import {  Router } from '@angular/router';


export class bucketlist{
constructor(
  public usserId:number,
  public description:string,
  public availability: boolean,
  public deliveryDate:Date){

}

}
@Component({
  selector: 'app-bucketlist',
  templateUrl: './bucketlist.component.html',
  styleUrls: ['./bucketlist.component.css']
})
export class BucketlistComponent implements OnInit {

bucketlists:bucketlist[];
message:string;
//=
// [
//   new bucketlist(1,'Jumpsuit',true,new Date()),
//   new bucketlist(2,'Dresses',true,new Date()),
//   new bucketlist(3,'Tops',true,new Date()),
//   new bucketlist(4,'Palazzos',true,new Date()),



// // {id:1, description: 'Jumpsuit' , available:true , date: new Date},
// // {id:1, description: 'Dresses' , available:true , date: new Date},
// //  {id:1, description: 'Tops' , available:true , date: new Date},
// //  {id:1, description: 'Palazzos' , available:true , date: new Date},
// // {id:1, description: 'Jumpsuit'},
// // {id:1, description: 'Dresses'},
// // {id:1, description: 'Tops' },
// // {id:1, description: 'Palazzos'},


// ]
  //ArrayInitialization
  // bucketlist=
  // {
  //    id:1,
  //    description:'Tops'


  // }
  constructor(
    private wishListDataService:WishListDataService,
    private router:Router
  ) { }

  ngOnInit() {
      this.wishListDataService.retreiveWishList('soni').subscribe(
 response =>{
   console.log(response);
   this.bucketlists =response;
 }

    )
  }


  deleteByID(usserId){
    console.log(`Delete  ${usserId}`)
this.wishListDataService.deleteByID('soni',usserId).subscribe(
response => {
console.log(response);
this.message=`Deleted Successfully the id ${usserId}`

})}

UpdateByID(usserId){
  console.log(`Update  ${usserId}`);
  this.router.navigate(['mywishdata',usserId])

}
}
