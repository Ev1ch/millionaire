import { IAnswer, IIndexedAnswer } from 'domain/answer';

export interface IQuestion {
    text: string;
    prize: number;
    answers: IAnswer[];
}

export interface IIndexedQuestion extends IQuestion {
    id: number;
    answers: IIndexedAnswer[];
}
