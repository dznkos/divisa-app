import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {

  cantidad = 0;
  dedivisa = 'USD';
  paradivisa = 'EUR';
  total = 0;

  monedas: string[] = ['USD', 'EUR','PEN']

  constructor() { }

  ngOnInit(): void {
  }

  cambiardivisa() {

    switch(this.dedivisa){

      case 'USD':
        if (this.paradivisa === 'USD') {
          this.total = this.cantidad;
        } 
        if ( this.paradivisa === 'EUR')
        {
          this.total = Math.round(this.cantidad * 0.85);
        }
        if ( this.paradivisa === 'PEN')
        {
          this.total = Math.round(this.cantidad * 4.11);
        }
        break;
      case 'EUR':
        if (this.paradivisa === 'USD') {
          this.total = Math.round(this.cantidad * 1.18);
        } 
        if ( this.paradivisa === 'EUR')
        {
          this.total = this.cantidad;
        }
        if ( this.paradivisa === 'PEN')
        {
          this.total = Math.round(this.cantidad * 4.86);
        }
        break; 
      case 'PEN':
        if (this.paradivisa === 'USD') {
          this.total = Math.round(this.cantidad * 0.24);
        } 
        if ( this.paradivisa === 'EUR')
        {
          this.total = Math.round(this.cantidad * 0.21);
        }
        if ( this.paradivisa === 'PEN')
        {
          this.total = this.cantidad;
        }
        break;
    }

  }

}
