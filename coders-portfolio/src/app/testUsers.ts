import {user} from './user';
import { languageList } from './LangTests';

export const fakeUsers: user[] =
[
    {id: 1, name: 'Erick', email: 'erick.terra@fake.com', phone: '(00)0000-0000', lpTitle: 'Letter of Presentation', lpText: 'Hello, there! You can use this component to tell everyone one a little about yourself!', skills: [{language: languageList[0], level: 3}, {language: languageList[1], level: 1}]},
    {id: 2, name: 'James', email: 'james.fake@fake.com', phone: '(00)0000-0000',lpTitle: 'Letter of Presentation', lpText: 'Hello, there! You can use this component to tell everyone one a little about yourself!', skills: [{language: languageList[0], level: 2}]}
]
