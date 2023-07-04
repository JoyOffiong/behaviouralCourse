export default class FileUpload {
  id!: string;
  name!: string;
  size!: number;
  type!: string;
  format!: string;
  base64url!: string;
  uri!: string;
  fileUrl!: string;
  actualFileUrl!: string;
  preview!: string;
  isPrimary!: boolean;
  position!: number;

  constructor(dto: any = null) {
    if (dto) {
      this.id = dto._id
      this.name = dto.fileName || '';
      this.fileUrl = dto.fileUrl || '';
      this.actualFileUrl = dto.actualFileUrl || '';
      this.type = dto.fileType || '';
      this.format = dto.fileFormat || '';
      this.preview = dto.filePreview || '';
      this.isPrimary = !!dto.isPrimary;
    }
  }
}
