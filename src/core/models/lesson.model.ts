import FileUpload from "./file-upload.model";
import Quiz from "./quiz.model";

export default class Lesson {
  id!: string
  name!: string;
  moduleId!: string
  lessonNumber!: number
  type!: string
  duration!: string;
  links!: { title: string, url: string }[]
  resources!: FileUpload[]
  video!: FileUpload
  thumbnail!: FileUpload
  thumbnailUrl!: string
  article!: string
  likes!: number
  dislikes!: number
  status!: string

  quiz!: Quiz

  constructor(dto: any = null) {
    if (dto) {
      this.id = dto.id;
      this.name = dto.name;
      this.moduleId = dto.module;
      this.lessonNumber = dto.number;
      this.type = dto.type;
      this.duration = dto.duration;
      this.links = dto.links || [];
      this.resources = dto.resources;
      this.video = dto.video;
      this.thumbnail = dto.thumbnail;
      this.thumbnailUrl = dto.thumbnailUrl;
      this.article = dto.article;
      this.likes = dto.likes;
      this.dislikes = dto.dislikes;
      this.status = dto.status;
      this.quiz = dto.quiz
    }
  }
}