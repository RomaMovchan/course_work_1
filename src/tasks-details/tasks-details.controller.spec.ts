import { Test, TestingModule } from '@nestjs/testing';
import { TasksDetailsController } from './tasks-details.controller';

describe('TasksController', () => {
  let controller: TasksDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksDetailsController],
    }).compile();

    controller = module.get<TasksDetailsController>(TasksDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
