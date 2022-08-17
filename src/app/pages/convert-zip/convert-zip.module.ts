import { NgModule } from '@angular/core';

import { ConvertZipRoutingModule } from './convert-zip-routing.module';

import { ConvertZipComponent } from './convert-zip.component';


@NgModule({
  imports: [ConvertZipRoutingModule],
  declarations: [ConvertZipComponent],
  exports: [ConvertZipComponent]
})
export class ConvertZipModule { }
