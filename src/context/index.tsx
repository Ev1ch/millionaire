import React, { createContext, ReactNode } from 'react';
import quizConfig from 'configs/quiz/data.json';
import { IIndexedQuiz } from 'domain/quiz';
import { QuizService } from 'services';

const indexedQuiz = QuizService.indexQuiz(quizConfig);
export const Context = createContext<IIndexedQuiz>(indexedQuiz);

interface IProviderProps {
    children: ReactNode;
}

export function Provider({ children }: IProviderProps) {
    return <Context.Provider value={indexedQuiz}>{children}</Context.Provider>;
}

export default Context;
