import { Module } from '@nestjs/common';
import { TasksDetailsController } from './tasks-details.controller';
import { TasksDetailsService } from './tasks-details.service';
import { DbModule } from "../db/db.module";

@Module({
  imports: [ DbModule ],
  controllers: [TasksDetailsController],
  providers: [TasksDetailsService]
})
export class TasksDetailsModule {}
