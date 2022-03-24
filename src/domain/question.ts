import IAnswer from 'domain/answer';

interface IQuestion {
    text: string;
    answers: IAnswer[];
}

export default IQuestion;
