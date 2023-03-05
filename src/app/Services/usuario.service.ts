import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsuario, Results, ResultsJWT } from '../Models/auth';
import { Usuarios } from '../static/path-rest';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private _http: HttpClient) { }

  login(login:IUsuario): Observable<ResultsJWT>{
    return this._http.post(Usuarios.POST_LOGIN, login)as Observable<ResultsJWT>
  }
}
