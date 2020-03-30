import { Injectable } from '@angular/core';
import { Personne } from '../model/Personne';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {

private personnes: Personne[];
link = "http://localhost:3000/api/commun";
  constructor(private http: HttpClient) {
    this.personnes = [
      new Personne (1,'celest', 'nassi',36,'',1,'Assitant Professor' ),
      new Personne (2,'zidane', 'zenedine',42,'',1,'Footballer' ),
    ]
   }
   getPersonnes(): Observable<Personne[]>{
    
    return this.http.get<Personne[]>(this.link)

   }
   getFakePersonne(){
     return this.personnes;

   }

   getPersonneById(id: number): Observable<Personne>{
 
     return  this.http.get<Personne>(this.link + `/${id}`);
   }

   addPersonne(personne: Personne): Observable<any>{
     const token = localStorage.getItem('token');
     if(token){
       const params = new HttpParams().set('access_token',token);
       return this.http.post(this.link,personne,{params});
     }
     return this.http.post(this.link,personne)
   }

   deletePersonne(id: number){
     return this.http.delete(this.link + `/${id}`);
   }

   findByName(name): Observable<Personne[]>{

    const filter = `{"where": { "name":{"like":"%${name}%"}}}`;
    const params = new HttpParams().set('filter',filter);
    return this.http.get<Personne[]>(this.link, {params});
   }

}
