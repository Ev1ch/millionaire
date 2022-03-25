import IAnswer from 'domain/answer';

interface IQuestion {
    text: string;
    prize: number;
    answers: IAnswer[];
}

export default IQuestion;
