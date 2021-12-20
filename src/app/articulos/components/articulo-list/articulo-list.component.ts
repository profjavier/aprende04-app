import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulo-list',
  templateUrl: './articulo-list.component.html',
  styleUrls: ['./articulo-list.component.css']
})
export class ArticuloListComponent implements OnInit {

  constructor(private articuloService: ArticulosService) { }

  ngOnInit(): void {
  }

  get articulos() {
    return this.articuloService.articulos
  }

  borraFila(pos:number) {
    this.articuloService.borraFila(pos)
 }

}
