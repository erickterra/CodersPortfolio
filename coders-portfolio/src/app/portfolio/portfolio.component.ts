import { Component, OnInit } from '@angular/core';
import { Language } from '../Language';
import { LanguageFectherService } from '../language-fecther.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  langs: Language[];

  constructor(private fetcher: LanguageFectherService) { }

  ngOnInit(): void {
    this.langs = this.fetcher.getLanguages();
  }

}
