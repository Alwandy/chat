/** Following LUIX AVILES EXAMPLE - https://github.com/luixaviles/socket-io-typescript-chat/blob/master/client/src/app/shared/shared.module.ts  */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ 
    MaterialModule 
  ],
  declarations: []
})
export class SharedModule { }