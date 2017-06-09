import { Component, OnInit } from '@angular/core';
import { EmpService } from '../../emp.service';
import { Alumno } from '../../alumno';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  constructor(
    private _empService:EmpService,
    private router: Router
   ) { }
  alumnos:any;
  ngOnInit() {
    this.getAlumnos();
  }
  getAlumnos(){
     this._empService
        .getAlumnos()
        .subscribe(alumnos => {
          this.alumnos = alumnos;
      } )
  }
  deleteAlumno(id){
      this._empService
        .deleteAlumno(id)
        .subscribe(() => {
        this.getAlumnos();
      } )
  }

}
