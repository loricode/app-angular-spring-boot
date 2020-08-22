import { Component, OnInit } from '@angular/core';
import { BookService} from '../servicio/book.service';
import {FormControl} from '@angular/forms';
import {  Factura } from '../servicio/Factura';
@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  nombre: FormControl = new FormControl('')
  apellido: FormControl = new FormControl('')
  facturas:  Factura[] = []
  idproveedor = ''
  constructor(public _bookService: BookService) { }

  ngOnInit(): void {
    this.getFacturas()
  }

  getFacturas(){
    this._bookService.getFacturas().subscribe( response => {
      return  this.facturas = response   
    })
  }

  addFactura():void {
    let nombre = this.nombre.value;
    let apellido = this.apellido.value;
   if(this.idproveedor === ''){
      this._bookService.addFactura(nombre, apellido).subscribe(() => { 
        this.getFacturas()
        this.nombre.setValue("")
        this.apellido.setValue("") })
   } else{
    this._bookService.updateFactura(this.idproveedor,nombre, apellido)
      .subscribe(() => { 
      this.getFacturas()
      this.idproveedor=''
      this.nombre.setValue("")
      this.apellido.setValue("") })
   }
} 

  eliminar(id:string):void {
    this._bookService.eliminar(id).subscribe(() => {
      this.getFacturas()
    });
}

getFactura(id:string):void {
  this._bookService.getFactura(id).subscribe(response => {
     console.log(response)
     this.nombre.setValue(response.nombre)
     this.apellido.setValue(response.apellido)
     this.idproveedor = response.idproveedor
  })
}
  

}
