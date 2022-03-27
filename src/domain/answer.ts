export interface IAnswer {
    text: string;
    isCorrect?: boolean;
}

export interface ICorrectAnswer extends IAnswer {
    isCorrent: true;
}

export interface IIndexedAnswer extends IAnswer {
    id: number;
}
