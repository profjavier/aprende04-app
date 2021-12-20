import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ArticulosRoutingModule } from './articulos-routing.module';
import { ArticulosPageListComponent } from './pages/articulos-page-list/articulos-page-list.component';
import { ArticulosPageAddComponent } from './pages/articulos-page-add/articulos-page-add.component';
import { ArticuloFormComponent } from './components/articulo-form/articulo-form.component';
import { ArticuloListComponent } from './components/articulo-list/articulo-list.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ArticulosPageListComponent,
    ArticulosPageAddComponent,
    ArticuloFormComponent,
    ArticuloListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ArticulosRoutingModule,
  ]
})
export class ArticulosModule { }
