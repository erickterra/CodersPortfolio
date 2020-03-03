import { project } from './project';
import { languageList } from './LangTests';

export const testProjects: project[] = 
[
    {name: "codersFolio", description: "An study about making a Portfolio for Coders and Programmers to show their work",
     languages: [languageList[1], languageList[2]], link: "https://github.com/erickterra/CodersPortfolio"},
     {name: "Iventory Showcase", description: "An study on making a tool to help develop an generic inventory system",
     languages: [languageList[0], languageList[3]], link: "https://erickterra.itch.io/inventory-showcase"}
]
//global FAKE projects, for testing