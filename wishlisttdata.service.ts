import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { bucketlist } from 'src/app/bucketlist/bucketlist.component';

@Injectable({
  providedIn: 'root'
})
export class WishListDataService {

  constructor(
    private http:HttpClient
  ) { }

  
 retreiveWishList(userName){

    return this.http.get<bucketlist[]>(`http://localhost:8080/users/${userName}/MyWishData`);
    
      }


      deleteByID(userName,usserId){

        return this.http.delete(`http://localhost:8080/users/${userName}/MyWishData/${usserId}`);
        
          }



         retreiveByID(userName,usserId){

            return this.http.get(`http://localhost:8080/users/${userName}/MyWishData/${usserId}`);
            
              }
}
