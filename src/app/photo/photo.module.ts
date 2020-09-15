import { PhotoComponent } from './photo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotoGridComponent } from './photo-list/photo-grid/photo-grid.component';
import { FilterByDescriptionPipe } from './photo-list/filter-by-description.pipe';
import { LoadButtonComponent } from './photo-list/load-button/load-button.component';
import { CardComponent } from '../shared/components/card/card.component';
import { SearchComponent } from './photo-list/search/search.component';
import { DarkenOnHoverModule } from '../shared/directives/darken-on-hover/darken-on-hover.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VmessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { ImmediateClickModule } from '../shared/directives/immediate-click/immediate-click.module';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { PhotoCommentsComponent } from './photo-detail/photo-comments/photo-comments.component';
import { PhotoOwnerOnlyDirective } from './photo-detail/photo-owner-only/photo-owner-only.directive';
import { ShowIfLoggedDirective } from '../shared/directives/show-if-logged/show-if-logged.directive';
import { ShowIfLoggedModule } from '../shared/directives/show-if-logged/show-if-logged.module';



@NgModule({
  declarations: [
    PhotoComponent,
    PhotoListComponent,
    PhotoFormComponent,
    PhotoGridComponent,
    FilterByDescriptionPipe,
    LoadButtonComponent,
    CardComponent,
    SearchComponent,
    PhotoDetailComponent,
    PhotoCommentsComponent,
    PhotoOwnerOnlyDirective,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DarkenOnHoverModule,
    FormsModule,
    ReactiveFormsModule,
    VmessageModule,
    RouterModule,
    ImmediateClickModule,
    ShowIfLoggedModule
  ],
  exports: []
})
export class PhotoModule { }
