import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulo-form',
  templateUrl: './articulo-form.component.html',
  styleUrls: ['./articulo-form.component.css']
})
export class ArticuloFormComponent implements OnInit {
  public formGroup: FormGroup


  constructor(private articuloService: ArticulosService, private formBuilder: FormBuilder ) {
    this.formGroup = this.formBuilder.group({
      ref: ['',[Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      descripcion: '',
      precio: ['',[Validators.required, Validators.min(0)]],
      iva: 0,
      stock:0
    });
    //this.inicialidaForm();

   }

   ngOnInit(): void {
  }

  inicialidaForm(): void {
    this.formGroup = this.formBuilder.group({
      ref: '',
      descripcion: '',
      precio: 0,
      iva: 0,
      stock:0
    });
  }

  add() {
    if ( this.formGroup.invalid )  {
      this.formGroup.markAllAsTouched();
      return;
    }

    this.articuloService.add(this.formGroup.value)
    this.inicialidaForm();
  }

  validado( campo: string ) {
    return this.formGroup.controls[campo].errors
            && this.formGroup.controls[campo].touched;
  }
}
