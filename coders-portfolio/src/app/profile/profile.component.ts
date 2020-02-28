import { Component, OnInit , Input} from '@angular/core';
import { user } from '../user';
import {UserFetcherService} from '../user-fetcher.service'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  activeUser: user;
  view: string;
  constructor(private userFetcher: UserFetcherService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.activeUser = this.userFetcher.getUser(0);
    this.view = this.route.snapshot.paramMap.get('view');
  }

  save()
  {

  }

}
