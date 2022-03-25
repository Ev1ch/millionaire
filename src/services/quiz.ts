import { IIndexedQuiz, IQuiz } from 'domain/quiz';

export const indexArray = <T extends object>(array: T[]): (T & { id: number })[] =>
    array.map((item, index) => ({ ...item, id: index + 1 }));

export const indexQuiz = ({ questions }: IQuiz): IIndexedQuiz => ({
    questions: questions.map((question, index) => ({
        ...question,
        answers: indexArray(question.answers),
        id: index + 1,
    })),
});
