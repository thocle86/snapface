import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subject, take, takeUntil, tap } from 'rxjs';
import { FaceSnap } from '../../core/models/face-snap.model';
import { FaceSnapService } from '../../core/services/face-snap.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit, OnDestroy {

  private destroy$!: Subject<boolean>;
  faceSnaps$!: Observable<FaceSnap[]>;

  constructor(private snapService: FaceSnapService) {}

  ngOnInit(): void {
    this.faceSnaps$ = this.snapService.getAllFaceSnaps();
    
    this.destroy$ = new Subject();
    interval(1000).pipe(
      takeUntil(this.destroy$),
      tap(console.log)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

}
