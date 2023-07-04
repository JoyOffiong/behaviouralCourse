import ModuleModel from "./module.model";

export default class Course {
  id!: string;
  name!: string;
  programId!: string;
  overview!: string;
  about!: string;
  objectives!: string[];
  thumbnailUrl!: string;
  modules!: ModuleModel[]
  status!: string

  constructor(dto: any = null) {
    if (dto) {
      this.id = dto.id;
      this.name = dto.name;
      this.programId = dto.program;
      this.overview = dto.overview;
      this.about = dto.about;
      this.objectives = dto.objectives;
      this.thumbnailUrl = dto.thumbnailUrl;
      this.status = dto.status;
      if (dto && dto.modules && dto.modules.length > 0) {
        this.modules = dto.modules.map((x: any) => new ModuleModel(x));
      }

    }
  }
}
