import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateStudentDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly name: string;
  @IsNumber()
  @IsNotEmpty()
  readonly rollNumber: number;
  @IsNumber()
  @IsNotEmpty()
  readonly class: number;  
  @IsNumber()
  @IsNotEmpty()
  readonly marks: number;  
  @IsString()
  @MaxLength(12)
  @IsNotEmpty()
  readonly gender: string;  
}
