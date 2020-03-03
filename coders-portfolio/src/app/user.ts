import { skill } from './skills';

export interface user //user class, holds user profile structures
{
    id: number;
    name: string;
    email: string;
    phone: string;
    lpTitle: string;
    lpText: string;
    skills: skill[];  // skill is a struct class. holds a language and a level of knowledge
}