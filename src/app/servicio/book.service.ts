import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Factura } from './Factura';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
 // URL = "http://localhost/applibrolaravel/public/libro";
    URL = "http://localhost:8080/api/proveedor";
  constructor(private _http :HttpClient) { }

  getFacturas(): Observable<Factura[]> {
    return this._http.get<Factura[]>(this.URL);

  }

  addFactura(nombre:string, apellido:string): Observable<any>{
    let obj={ nombre, apellido }
    return this._http.post(this.URL, obj )
  }

eliminar(id:string):Observable<any>{
  return this._http.delete(this.URL+'/'+id)
}

getFactura(id:string):Observable<Factura>{
  return this._http.get<Factura>(this.URL+'/'+id)
}

updateFactura(idproveedor:string, nombre:string, apellido:string){
  let obj = { idproveedor, nombre, apellido }
  return this._http.put(this.URL, obj)
}
}


