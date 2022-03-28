import { IIndexedQuiz, IQuiz } from 'domain/quiz';
import { indexArray } from 'helpers';

export const indexQuiz = ({ questions }: IQuiz): IIndexedQuiz => ({
    questions: questions.map((question, index) => ({
        ...question,
        answers: indexArray(question.answers),
        id: index + 1,
    })),
});
