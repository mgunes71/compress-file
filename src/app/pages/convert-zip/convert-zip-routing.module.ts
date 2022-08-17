import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConvertZipComponent} from "./convert-zip.component";

const routes: Routes = [
  { path: '', component: ConvertZipComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConvertZipRoutingModule { }
