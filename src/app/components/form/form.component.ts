import { Component, OnInit } from '@angular/core';
import { ServesHttpService } from '../../services/serves-http.service';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private servesHttpService: ServesHttpService) { }
  public form = new FormGroup({
    name : new FormControl(""),
    age : new FormControl(""),
  })
  ngOnInit(): void {
  }
  onSubmit(){
    console.log("name= ", this.form.controls.name.value);
    console.log("age= ", this.form.controls.age.value);
  }
}
