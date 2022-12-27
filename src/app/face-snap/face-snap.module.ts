import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnapItemComponent } from './face-snap-item/face-snap-item.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { NewFaceSnapComponent } from './new-face-snap/new-face-snap.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FaceSnapRoutingModule } from './face-snap-routing.module';

@NgModule({
  declarations: [
    FaceSnapItemComponent,
    FaceSnapListComponent,
    NewFaceSnapComponent,
    SingleFaceSnapComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FaceSnapRoutingModule
  ],
  exports: [
    FaceSnapItemComponent,
    FaceSnapListComponent,
    NewFaceSnapComponent,
    SingleFaceSnapComponent
  ]
})
export class FaceSnapModule { }
