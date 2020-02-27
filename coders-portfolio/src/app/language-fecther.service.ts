import { Injectable } from '@angular/core';
import { languageList } from './LangTests';
import {Language} from './Language'

@Injectable({
  providedIn: 'root'
})
export class LanguageFectherService {

  getLanguages(): Language[]
  {
    return languageList;
  }
  constructor() { }
}
