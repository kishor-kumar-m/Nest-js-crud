import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { AppService } from "./app.service";
import { studentSchema } from "./schema/student.schema";
import { StudentService } from './student/student.service';
import { StudentController } from './student/student.controller';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017", { dbname: "nestcrud" }),
    MongooseModule.forFeature([{ name: "Student", schema: studentSchema }]),
  ],
  controllers: [AppController, StudentController],
  providers: [AppService, StudentService],
})
export class AppModule {}
