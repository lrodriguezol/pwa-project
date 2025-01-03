import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cat } from '../models/cat.interface';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  // URL base de la API
  private apiUrl = 'https://api.thecatapi.com/v1'; 

  constructor(private http: HttpClient) { }

  getAllCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>(`${this.apiUrl}/breeds`);
  }

  getCatsById(id: string): Observable<Cat> {
    return this.http.get<Cat>(`${this.apiUrl}/breeds/${id}`);
  }
}