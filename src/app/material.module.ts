import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [

  ],
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule
  ],

  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule
  ],

})
export class MaterialModule { }
