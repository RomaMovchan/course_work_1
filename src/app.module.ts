import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from "./tasks/tasks.module";
import { DbModule } from './db/db.module';

@Module({
  imports: [ TasksModule, DbModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
