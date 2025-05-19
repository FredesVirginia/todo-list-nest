import {
  BadRequestException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoList } from './entity/todo.entity';
import { Repository } from 'typeorm';
import { CreateTodoListDto } from './dto/User-created.dto';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class TodoListService {
  constructor(
    @InjectRepository(TodoList)
    private todoListRepository: Repository<TodoList>,
  ) {}

  async createTodoList(todoListDto: CreateTodoListDto) {
    try {
      const todoListNew = await this.todoListRepository.save(todoListDto);
      return todoListNew;
    } catch (error) {
      console.log('EEROR FUE ', error);

      if (error.name === 'QueryFailedError') {
        throw new BadRequestException(
          'Datos inválidos o violación de restricciones',
        );
      }

      throw new InternalServerErrorException('Error interno del servidor');
    }
  }
}
