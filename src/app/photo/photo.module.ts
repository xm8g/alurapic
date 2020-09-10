import { PhotoComponent } from './photo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotoGridComponent } from './photo-list/photo-grid/photo-grid.component';



@NgModule({
  declarations: [
    PhotoComponent,
    PhotoListComponent,
    PhotoFormComponent,
    PhotoGridComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: []
})
export class PhotoModule { }
