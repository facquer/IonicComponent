import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ScreeshotComponent } from '../componetes/screeshot/screeshot.component';
import { PublicidadComponent } from '../componentes/publicidad/publicidad.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, ScreeshotComponent, PublicidadComponent],
  exports: [ScreeshotComponent, PublicidadComponent]
})
export class HomePageModule {}
