import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { EmpService } from '../../emp.service';
import { Alumno } from '../../alumno';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html'
  //styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private empService: EmpService
  ) { }

  ngOnInit() {
    this.getSingleAlumno();
  }
  alumno:Alumno;
  getSingleAlumno(){
    var id = this.route.snapshot.params['id'];
    this.empService
      .getAlumno(id)
      .subscribe(alumno =>{
          this.alumno = alumno[0];
          })
  };

  goBack(){
    this.router.navigate(['/alumno']);
  }
}
