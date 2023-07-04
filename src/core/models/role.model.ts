export class Role {
  roleId!: number;
  name!: string;
  code!: string;

  constructor(dto: any = null) {
    if (dto) {
      this.roleId = dto.id;
      this.name = dto.name;
      this.code = dto.code;

    }
  }
}
