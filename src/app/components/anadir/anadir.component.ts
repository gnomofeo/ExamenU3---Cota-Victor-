import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-anadir',
  templateUrl: './anadir.component.html',
  styleUrls: ['./anadir.component.css']
})
export class AnadirComponent implements OnInit {

  formularios: FormGroup;

  constructor( private fb: FormBuilder) { 
    this.crearFormulario();
    this.cargarDataFormulario();
   }


  ngOnInit(): void {
  }

  crearFormulario(){
    this.formularios = this.fb.group({
      nombre: ['', Validators.required,Validators.minLength(5)],
      apellido: ['', Validators.required],
      telefono:   ['', Validators.required],
      correo: ['', Validators.required]

    });

  }

  cargarDataFormulario(){
    this.formularios.setValue({
      nombre: '', apellidos: '', email: '', teléfono: ''
  });

  }
  Guardar(){
    if(this.formularios.valid){
      console.log(this.formularios.value);
    }
else{
  console.log('su formulario no es valido')

    }
  }
}
