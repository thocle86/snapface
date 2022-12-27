import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isConnected = false;

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.setConnected();
  }

  onAddNewFaceSnap(): void {
    this.router.navigateByUrl('/facesnaps/create');
  }

  setConnected() {
    if (this.auth.getToken()) {
      console.log(this.auth.getToken());
      this.isConnected = true;
    }
  }

}
