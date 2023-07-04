export default class QuestionOption {
  id!: string
  label!: string
  text!: string
  question!: string
  isCorrect!: boolean

  constructor(dto: any = null) {
    if (dto) {
      this.id = dto.id;
      this.label = dto.label;
      this.text = dto.text;
      this.question = dto.question;
      this.isCorrect = dto.isCorrect;
    }
  }
}
