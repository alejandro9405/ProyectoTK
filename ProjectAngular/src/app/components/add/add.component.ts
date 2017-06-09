import { Component, OnInit } from '@angular/core';
import { EmpService } from '../../emp.service';
import { Alumno } from '../../alumno';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  //styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(
    private empService: EmpService,
     private router: Router) { }

  ngOnInit() {
  }

model = new Alumno();
  addAlumno(){
      this.empService
        .addAlumno(this.model)
        .subscribe(()=> this.goBack());
  }
   goBack(){
    this.router.navigate(['/alumno']);
  }
}
