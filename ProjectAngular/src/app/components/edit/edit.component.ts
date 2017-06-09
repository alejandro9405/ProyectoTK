import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EmpService } from '../../emp.service';
import { Alumno } from '../../alumno';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
  //styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

   constructor(
    private router: Router,
    private route: ActivatedRoute,
    private empService: EmpService
  ) { }

  ngOnInit() {
      this.getSingleAlumno();
  }

  //model:any={};
  model = new Alumno();
  id = this.route.snapshot.params['id'];
  getSingleAlumno(){

    this.empService
      .getAlumno(this.id)
      .subscribe(alumno =>{
          this.model = alumno[0];
          })
  };

  updateAlumno(){
      this.empService
        .updateAlumno(this.model)
        .subscribe(()=> this.goBack());
  }

   goBack(){
    this.router.navigate(['/alumno']);
  }
}
