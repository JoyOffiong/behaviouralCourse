import { Role } from "./role.model";

export class User {
  id!: string;
  password!: string;
  firstName!: string;
  lastName!: string;
  email!: string;
  name!: string;
  phoneNo!: string;
  photoUrl!: string;
  status!: string;
  address!: string;
  roles!: Role[];
  roleName!: string;
  accessToken!: string;
  quizTaken!: string[];
  completedLessons!: string[];

  constructor(dto: any = null) {
    if (dto) {
      this.id = dto.id;
      this.email = dto.email;
      this.firstName = dto.firstName;
      this.lastName = dto.lastName;
      this.name = `${dto.firstName} ${dto.lastName}`
      this.phoneNo = dto.phone;
      this.photoUrl = dto.photoUrl;
      this.status = dto.status;
      this.address = dto.address;
      this.roles = dto.roles && dto.roles.length > 0 ? dto.roles.map((r: any) => {
        this.roleName = r.name
        return new Role(r)
      }) : [];
      this.quizTaken = dto.quizTaken
      this.completedLessons = dto.completedLessons

    }
  }
}
