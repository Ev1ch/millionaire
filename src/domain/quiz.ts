import { IIndexedQuestion, IQuestion } from 'domain/question';

export interface IQuiz {
    questions: IQuestion[];
}

export interface IIndexedQuiz {
    questions: IIndexedQuestion[];
}
