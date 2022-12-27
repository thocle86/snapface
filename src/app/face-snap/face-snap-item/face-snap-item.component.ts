import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../../core/models/face-snap.model';
import { FaceSnapService } from '../../core/services/face-snap.service';

@Component({
  selector: 'app-face-snap-item',
  templateUrl: './face-snap-item.component.html',
  styleUrls: ['./face-snap-item.component.scss']
})
export class FaceSnapItemComponent implements OnInit {

  SNAP_BUTTON_FALSE: string = "Oh Snap 😍!";
  SNAP_BUTTON_TRUE: string = "Oops unsnap 😯!";

  @Input() faceSnap!: FaceSnap;

  snapButton: string = this.SNAP_BUTTON_FALSE;

  constructor(
    private snapService: FaceSnapService,
    private router: Router
    ) { }

  ngOnInit(): void { }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }

}
