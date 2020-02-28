import { Component, OnInit } from '@angular/core';
import { LanguageFectherService } from '../language-fecther.service';
import { UserFetcherService } from '../user-fetcher.service';
import { user } from '../user';
import { skill } from '../skills';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  id: number;
  activeUser: user;
  view: string;
  skills: skill[];

  constructor(private route: ActivatedRoute, private fetcher: LanguageFectherService, private userFetcher: UserFetcherService) { }

  ngOnInit(): void {
  this.id = +this.route.snapshot.paramMap.get('id');
  this.activeUser = this.userFetcher.getUser(this.id);
  this.skills = this.activeUser.skills;
  this.view = this.route.snapshot.paramMap.get('view');
  }

}
