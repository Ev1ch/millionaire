import Joi from 'joi';

const answerSchema = Joi.object({
    text: Joi.string().required(),
    isCorrect: Joi.boolean(),
});

const correctAnswerSchema = Joi.object({
    text: Joi.string().required(),
    isCorrect: Joi.boolean().required(),
});

const questionSchema = Joi.object({
    text: Joi.string().required(),
    prize: Joi.number().required(),
    answers: Joi.array().items(answerSchema).min(2).has(correctAnswerSchema),
});

const schema = Joi.object({ questions: Joi.array().items(questionSchema) });

export default schema;
