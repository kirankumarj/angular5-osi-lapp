import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { HttpHeaders,HttpClient, HttpParams} from '@angular/common/http';
import { RequestOptions} from '@angular/http';



@Injectable()
export class DataService {

	private items = new BehaviorSubject<any>(['Old product','new Product','Third Party Products']);
	item = this.items.asObservable();
  url: string ;
  result:string;



  constructor(private http:HttpClient) {
    this.url = 'http://localhost:3000/details';
  }

  // private users = new BehaviorSubject<any>(this.http.get(this.url).map((res :Response) => {res.json();
  // console.log(res);}));
  // user = this.users.asObservable();

  changeItem(item){
  	this.items.next(item);
  }

  getDayWiseInfo(date): Observable<any> {
    let params = new HttpParams();
    params = params.append('date', date);

    return this.http
        .get(this.url,{params: params})
        .map((response: Response) => {
          console.log(response);
            return response;
        })
    }


    // public createUser(user: User): Observable<User> {
    //   return this.http
    //     .post(this.url, user)
    //     .map(response => {
    //       return new User(response);
    //     })
    // }


    insertUser(users) {
      const headers = new HttpHeaders()
    .set("Content-Type", "application/json");

      this.http.post("http://localhost:3000/users",
          users, {headers})
          .subscribe(
              (val) => {
                  console.log("POST call successful value returned in body",
                              val);
              },
              response => {
                  console.log("POST call in error", response);
                  this.result =  response;
              },
              () => {
                  console.log("The POST observable is now completed.");
              });

              return this.result;
      }

      searchUser(users) {

        let search = new URLSearchParams();
        search.set('name', users.name);
        return this.http
        .get("http://localhost:3000/user",{params: users})
        .map((response: Response) => {
          console.log(response);
            return response;
        })

        }

        empEnroll(enrollData) {
          const headers = new HttpHeaders()
        .set("Content-Type", "application/json");

          this.http.post("http://localhost:3000/enroll",
          enrollData)
              .subscribe(
                  (val) => {
                      console.log("POST call successful value returned in body",
                                  val);
                  },
                  response => {
                      console.log("POST call in error", response);
                      this.result =  response;
                      return this.result;
                  },
                  () => {
                      console.log("The POST observable is now completed.");
                  });
                  console.log('result'+this.result);
                  return this.result;
          }
}
