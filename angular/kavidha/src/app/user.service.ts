import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";



@Injectable({
    providedIn: 'root'
})


export class UserService {

    private baseUrl = 'http://localhost:5000/users'

    constructor(private http: HttpClient) { }


    createUser(user: Object): Observable<Object> {
        return this.http.post(`${this.baseUrl}`, user)
    }

    getUsersList(): Observable<any> {
        return this.http.get(`${this.baseUrl}`);
    }

    getUser(_id : string): Observable<any> {
      return this.http.get(`${this.baseUrl}/${_id}`)
    }

    deleteUser(_id: string): Observable<any> {
      return this.http.delete(`${this.baseUrl}/${_id}`);
    }

    updateUser(_id: string, body: any):Observable<Object> {
      return this.http.put(`${this.baseUrl}/${_id}`, body)
    }
}