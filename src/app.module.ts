import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from "./tasks/tasks.module";
import { TasksDetailsModule } from "./tasks-details/tasks-details.module";

@Module({
  imports: [ TasksModule, TasksDetailsModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
