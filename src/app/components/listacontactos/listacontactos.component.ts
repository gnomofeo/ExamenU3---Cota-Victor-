import { Component, OnInit } from '@angular/core';
import{ContactosService}  from  'src/app/services/contactos.service';

@Component({
  selector: 'app-listacontactos',
  templateUrl: './listacontactos.component.html',
  styleUrls: ['./listacontactos.component.css']
})
export class ListacontactosComponent implements OnInit {
  contactos: import("c:/Users/victo/Desktop/examenmartes08/src/app/services/contactos.service").Contactos[];

  constructor(private serviciocontactos:ContactosService) { 
    this.contactos  = serviciocontactos.getContactos();
console.log();


  }

  ngOnInit(): void {
  }

}
