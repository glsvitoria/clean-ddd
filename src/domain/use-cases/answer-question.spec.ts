import { expect, test } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'
import { AnswersRepository } from '../repositories/answers-repository'
import { Answer } from '../entities/answer'

const fakeAnswersRepository: AnswersRepository = {
	create: async (answer: Answer) => {
		return
	},
}

test('create an answer', async () => {
	const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

	const answer = await answerQuestion.execute({
		instructorId: '1',
		questionId: '1',
		content: 'Nova Resposta',
	})

	expect(answer.content).toBe('Nova Resposta')
})
