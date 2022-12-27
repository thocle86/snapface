import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { FaceSnap } from '../../core/models/face-snap.model';
import { FaceSnapService } from '../../core/services/face-snap.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  SNAP_BUTTON_FALSE: string = "Oh Snap 😍!";
  SNAP_BUTTON_TRUE: string = "Oops unsnap 😯!";

  faceSnap!: FaceSnap;
  faceSnap$!: Observable<FaceSnap>;

  snapButton: string = this.SNAP_BUTTON_FALSE;

  constructor(
    private snapService: FaceSnapService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.snapService.getFaceSnapById(snapId);
  }

  onSnap(id: number) {
    if (this.snapButton === this.SNAP_BUTTON_FALSE) {
      this.faceSnap$ = this.snapService.snapFaceSnapById(id, 'snap').pipe(
        tap(() => this.snapButton = this.SNAP_BUTTON_TRUE)
      );
    } else {
      this.faceSnap$ = this.snapService.snapFaceSnapById(id, 'unsnap').pipe(
        tap(() => this.snapButton = this.SNAP_BUTTON_FALSE)
      );
    }
  }

}
