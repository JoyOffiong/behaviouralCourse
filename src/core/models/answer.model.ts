export default class Answer {
  userId!: string;
  quizId!: string;
  questionId!: string;
  questionText!: string;
  optionId!: string;
  optionLabel!: string;
  optionText!: string;
  isCorrect!: boolean;

  constructor(dto: any = null) {
    if (dto) {
      this.userId = dto.user;
      this.quizId = dto.quiz;
      this.questionId = dto.question;
      this.questionText = dto.questionText;
      this.optionId = dto.option;
      this.optionLabel = dto.optionLabel;
      this.optionText = dto.optionText;
      this.isCorrect = dto.isCorrect
    }
  }
}