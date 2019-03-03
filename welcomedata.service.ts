import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloBean{
  constructor(public message:string){}
  
  }
  

@Injectable({
  providedIn: 'root'
})

export class WelcomeDataService {

  // to invoke http methods, call this httpclient
  constructor(private http: HttpClient) { }


  executeHelloWorldBeanService(){

return this.http.get<HelloBean>('http://localhost:8080//hello-world-bean');

  }


// forPath variables from rest
executeHelloWorldBeanServiceWithPathVariable(name){

    return this.http.get<HelloBean>(`http://localhost:8080//hello-world-bean/path-variable/${name}`);
    
      }

}
