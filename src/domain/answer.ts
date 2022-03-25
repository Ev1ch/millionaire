export interface IAnswer {
    text: string;
    isCorrect?: boolean;
}

export interface IIndexedAnswer extends IAnswer {
    id: number;
}
