import { Module } from '@nestjs/common';
import { TodoListController } from './todo-list.controller';
import { TodoListService } from './todo-list.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoList } from './entity/todo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TodoList])], 
  controllers: [TodoListController],
  providers: [TodoListService]
})
export class TodoListModule {}
