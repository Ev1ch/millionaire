import IQuestion from 'domain/question';

interface IStage {
    name: string;
    prize: number;
    questions: IQuestion[];
}

export default IStage;
