import { Component, OnInit } from '@angular/core';
import { user } from '../user';
import {UserFetcherService} from '../user-fetcher.service'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  activeUser: user;
  constructor(private userFetcher: UserFetcherService) { }

  ngOnInit(): void {
    this.activeUser = this.userFetcher.getUser(0);
  }

}
