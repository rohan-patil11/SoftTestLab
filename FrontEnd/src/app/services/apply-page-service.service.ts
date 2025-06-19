import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplyPageServiceService {

  constructor(private http:HttpClient) { }

  onSubmit(application:any):Observable<any>{
    const url='http://localhost:9292/submitApplication';
    return this.http.post(url,application);


  }
}
