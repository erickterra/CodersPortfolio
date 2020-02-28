import { Component, OnInit } from '@angular/core';
import { user } from '../user';
import { UserFetcherService } from '../user-fetcher.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  activeUser: user;

  constructor(private uFetcher: UserFetcherService) { }

  ngOnInit(): void {
    this.activeUser = this.uFetcher.getUser(1);
  }

}
