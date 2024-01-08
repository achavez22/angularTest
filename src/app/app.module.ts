import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MedicosComponent } from './intermediate/Spy/medicos.component';
import { MedicoComponent } from './intermediate2/medico/medico.component';
import { MedicoService } from './intermediate2/medico.service';
import { HttpClientModule } from '@angular/common/http';
import { HospitalComponent } from './intermediate2/hospital/hospital.component';
import { IncrementadorComponent } from './intermediate2/incrementador/incrementador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, 
    MedicosComponent, 
    MedicoComponent, 
    HospitalComponent, 
    IncrementadorComponent, 
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [MedicoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
