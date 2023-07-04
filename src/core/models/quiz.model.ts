import Question from "./question.model";

export default class Quiz {
  id!: string
  name!: string
  instructions!: string[]
  lessonId!: string
  questions!: Question[];
  status!: string

  constructor(dto: any = null) {
    if (dto) {
      this.id = dto.id;
      this.name = dto.name;
      this.instructions = dto.instructions;
      this.lessonId = dto.lesson;
      this.status = dto.status;
      this.questions =
        dto && dto.questions && dto.questions.length > 0
          ? dto.questions.map((x: any) => new Question(x))
          : [];
    }
  }
}
