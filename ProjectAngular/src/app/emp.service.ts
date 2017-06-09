import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmpService {
  alumnos=[];
  constructor(private _http:Http) { }
  checkMe:any;
  getAlumnos(){
    return this._http.get("http://localhost/tkapi/select.php/")
      .map(res=>{
        this.checkMe = res;

        if(this.checkMe._body !== "0"){
           return res.json()
        }

      });
  }
  addAlumno(info){
    return this._http.post("http://localhost/tkapi/insert.php",info)
      .map(()=>"");
  }
  getAlumno(id){
    return this._http.post("http://localhost/tkapi/selectone.php/",{'id':id})
      .map(res=>res.json());
  }
  deleteAlumno(id){
    return this._http.post("http://localhost/tkapi/delete.php/",{'id':id})
      .map(()=>this.getAlumnos());
  }
  updateAlumno(info){
    return this._http.post("http://localhost/tkapi/update.php/", info)
      .map(()=>"");
  }
}
