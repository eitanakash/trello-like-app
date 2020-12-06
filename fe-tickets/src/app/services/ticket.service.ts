import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(`${baseUrl}/tickets/all`);
  }

  create(data): Observable<any> {
    return this.http.post(`${baseUrl}/tickets/add`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/tickets/delete/${id}`);
  }

  update(data): Observable<any> {
    return this.http.post(`${baseUrl}/tickets/update`, data);
  }

  get(id): Observable<any> {
    return this.http.get(`${baseUrl}/tickets/${id}`);
  }


  findByTitle(title): Observable<any> {
    return this.http.get(`${baseUrl}/tickets/?title=${title}`);
  }
}