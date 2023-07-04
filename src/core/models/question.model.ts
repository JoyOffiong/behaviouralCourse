import QuestionOption from "./questionOption.model";

export default class Question {
  id!: string
  text!: string
  quiz!: string
  options!: QuestionOption[];
  status!: string

  constructor(dto: any = null) {
    if (dto) {
      this.id = dto.id;
      this.text = dto.text;
      this.quiz = dto.quiz;
      this.status = dto.status;
      this.options =
        dto && dto.options && dto.options.length > 0
          ? dto.options.map((x: any) => new QuestionOption(x))
          : [];
    }
  }
}

