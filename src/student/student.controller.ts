import { CreateStudentDto } from "./../dto/create-student.dto";
import { StudentService } from "./student.service";
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from "@nestjs/common";
import { response } from "express";
import { UpdateStudentDto } from "src/dto/update-student.dto";

@Controller("student")
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
  @Post()
  async createStudent(
    @Res() response,
    @Body() createStudentDto: CreateStudentDto
  ) {
    try {
      const newStudent = await this.studentService.createStudent(
        createStudentDto
      );
      return response.status(HttpStatus.CREATED).json({
        message: "Student has been created successfully",
        data: newStudent,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: "Error while creating Student",
        error: err,
      });
    }
  }

  @Get()
  async getStudents(@Res() response) {
    try {
      const studentData = await this.studentService.getAllStudents();
      return response.status(HttpStatus.OK).json({
        message: "All students data found successfully",
        studentData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
    }  
    @Get('/:id')
    async getStudentById(@Res() response, @Param('id') studentId: string) {
        try {
            const studentData = await this.studentService.getStudent(studentId);
              return response.status(HttpStatus.OK).json({
                  message: 'Student data has been successfully retrieved',
                  data :studentData,
              });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
            
        }
    }
   
    
  @Put('/:id')
  async updateStudent(@Res() response, @Param('id') studentId: string,
          @Body() updateStudentDto: UpdateStudentDto) {
          try {
              const existingStudent = await this.studentService.updateStudent(studentId, updateStudentDto);
              return response.status(HttpStatus.OK).json({
                  message: 'Student has been successfully updated',
                  existingStudent,
              });
          } catch (err) {
              return response.status(err.status).json(err.response);
          }
  }
  
  @Delete('/:id')
      async deleteStudent(@Res() response,@Param('id') studentId:string){
          try{
   
              const deletedStudent = await this.studentService.deleteStudent(studentId)
   
              return response.status(HttpStatus.OK).json({
                  message:"Student Deleted Successfully",
                  deletedStudent
              })
   
          }catch(err){
              return response.status(err.status).json(err.response)
          }
      }
}
