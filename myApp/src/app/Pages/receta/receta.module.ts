import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetaPageRoutingModule } from './receta-routing.module';

import { RecetaPage } from './receta.page';
import { SafePipe } from 'src/app/Pipes/SafePipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetaPageRoutingModule
  ],
  declarations: [RecetaPage,
  SafePipe]
})
export class RecetaPageModule {}
