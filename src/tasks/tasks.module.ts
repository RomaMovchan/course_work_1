import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { DbModule } from "../db/db.module";

@Module({
  imports: [ DbModule ],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}
