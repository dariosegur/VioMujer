import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GeografiaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GeografiaProvider {

  constructor(public http: HttpClient) {
    
  }
  GetDepartamentos(){
    return new Promise(
      resolve=>{
        this.http.get("http://paidcoldev.com/api/Departamento/",{responseType:"json"}).subscribe(
          data=>{
            resolve(data);
          },
          error=>{console.error(error);}
        );
  
      });  
  }
  GetCiudades(DepartamentoId){
    return new Promise(
      resolve=>{
        this.http.get("http://paidcoldev.com/api/Ciudad/"+DepartamentoId,{responseType:"json"}).subscribe(
          data=>{
            resolve(data);
          },
          error=>{console.error(error);}
        );
  
      });  
  }

  Report(Direccion, Descripcion){

    let postData = {
      "Descripcion": Descripcion,
      "Direccion": Direccion,
      "FechaReporte": new Date().toISOString()
    }
    return new Promise(
      resolve=>{
        this.http.post("http://paidcoldev.com/api/ReportDenuncia",postData,{responseType:"json"}).subscribe(
          data=>{
            resolve(data);
          },
          error=>{console.error(error);}
        );
  
      });  
  }
}
