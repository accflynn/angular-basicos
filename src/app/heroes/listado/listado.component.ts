import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

heroes: string[] = ['Spiderman', 'Ironman','Hulk', 'Thor', 'Capitán América'];
heroeBorrado: string ='';

borrarHeroe(){
  this.heroeBorrado = this.heroes.shift() || '';
}


/*
borrarHeroe() {
  console.log('borrando...');
  this.heroes.pop(); // POP es un metodo de JavaScript que borra el último elemento del arreglo
} */

}
