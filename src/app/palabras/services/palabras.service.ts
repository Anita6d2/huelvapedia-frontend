import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../../../../environments/enviroments';
import { Palabra } from '../interfaces/palabra.interface';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PalabrasService {

  private baseUrl: string = enviroment.baseURL;

  constructor(private httpClient: HttpClient) { }

  getPalabras(): Observable<Palabra[]> {
    return this.httpClient.get<Palabra[]>(`${this.baseUrl}/palabras`);
  }

  getPalabraById(id: string): Observable<Palabra | undefined >{

    return this.httpClient.get<Palabra>(`${this.baseUrl}/palabras/${id}`)
    .pipe(
      catchError(error => of (undefined))
    );
  }

  getSuggestions(query: string): Observable<Palabra[]>{
    return this.httpClient.get<Palabra[]>(`${this.baseUrl}/palabras?q=${query}&_limit=6`);
  }

  addPalabra(palabra: Palabra): Observable<Palabra>{
    return this.httpClient.post<Palabra>(`${this.baseUrl}/palabras`, palabra);
  }

  updatePalabra(palabra: Palabra): Observable<Palabra>{
    if(!palabra._id) throw Error ('Palabra id is required');
    return this.httpClient.patch<Palabra>(`${this.baseUrl}/palabras/${palabra._id}`, palabra);
  }

  deletePalabraById(id: string): Observable<boolean>{

    return this.httpClient.delete<Palabra>(`${this.baseUrl}/palabras/${id}`)
    .pipe(
      map(resp => true),
      catchError(() => of(false)),
    );
  }


}

