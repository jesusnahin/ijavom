import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteComponent } from './clases/componente/componente.component';
import { BindingComponent } from './clases/binding/binding.component';
import { FormsModule } from '@angular/forms';
import { CicloVidaComponent } from './clases/ciclo-vida/ciclo-vida.component';
import { ClasesComponent } from './clases/clases.component';
import { DirectivasComponent } from './clases/directivas/directivas.component';
import { CalculadoraComponent } from './clases/calculadora/calculadora.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteComponent,
    BindingComponent,
    CicloVidaComponent,
    ClasesComponent,
    DirectivasComponent,
    CalculadoraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
