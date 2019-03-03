import { Component, OnInit } from '@angular/core';
import { WishListDataService } from '../service/data/wish-list-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-wishdata',
  templateUrl: './my-wishdata.component.html',
  styleUrls: ['./my-wishdata.component.css']
})
export class MyWishdataComponent implements OnInit {

  id:number;
  constructor(
    private wishListDataService:WishListDataService,
    private router:ActivatedRoute
  ) { }

  ngOnInit() {
    this.id= this.router.snapshot.params['id']
    this.wishListDataService.retreiveByID('soni', this.id)
  }

}
