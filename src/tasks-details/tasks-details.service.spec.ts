import { Test, TestingModule } from '@nestjs/testing';
import { TasksDetailsService } from './tasks-details.service';

describe('TasksService', () => {
  let service: TasksDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TasksDetailsService],
    }).compile();

    service = module.get<TasksDetailsService>(TasksDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
