import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/convert-zip' },
  { path: 'convert-zip', loadChildren: () => import('./pages/convert-zip/convert-zip.module').then(m => m.ConvertZipModule) },
  { path: 'compress-image', loadChildren: () => import('./pages/compress-image/compress-image.module').then(m => m.CompressImageModule)},
  { path: 'convert-multiple-zip', loadChildren: () => import('./pages/convert-multiple-zip/convert-multiple-zip.module').then(m => m.ConvertMultipleZipModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
