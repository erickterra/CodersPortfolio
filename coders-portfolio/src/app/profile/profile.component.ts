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

  id: number;
  activeUser: user;
  view: string;
  constructor(private userFetcher: UserFetcherService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.activeUser = this.userFetcher.getUser(this.id);
    this.view = this.route.snapshot.paramMap.get('view');
  }

  save()
  {

  }

}
