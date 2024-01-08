import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: [],
})
export class MedicoComponent implements OnInit {

  medicos: any[] = [];
  constructor(public _medicoService: MedicoService) { }

  ngOnInit() {

  }
  saludarMedico(name: string) {
    return `Hola ${name}`;
  }

  obtenerMedicos(){
    this._medicoService.getMedicos()
      .subscribe(
        (medicos: any) => {
          this.medicos = medicos;
        });
  }
}
