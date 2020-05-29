import { Component, OnInit } from '@angular/core';
import { IAppState } from '../../models/appstate.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {}
}
