import Lesson from "./lesson.model";

export default class ModuleModel {
  id!: string;
  name!: string;
  courseId!: string;
  moduleNumber!: number;
  isCompleted!: boolean;
  status!: string;
  lessons!: Lesson[];

  constructor(dto: any = null) {
    if (dto) {
      this.id = dto.id;
      this.name = dto.name;
      this.courseId = dto.course;
      this.moduleNumber = dto.moduleNumber;
      this.isCompleted = dto.isCompleted;
      this.status = dto.status;
      if (dto && dto.lessons && dto.lessons.length > 0) {
        this.lessons = dto.lessons.map((x: any) => new Lesson(x));
      }
    }
  }
}