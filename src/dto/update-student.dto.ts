import { CreateStudentDto } from './create-student.dto';
import { PartialType } from "@nestjs/mapped-types";

export class UpdateStudentDto extends PartialType(CreateStudentDto) {
    
}