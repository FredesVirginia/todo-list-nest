
import { IsString, IsEnum, IsOptional, IsUUID, IsNotEmpty } from 'class-validator';
import { TodoListState } from '../enums/enums';

export class CreateTodoListDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  month: string;

  @IsEnum(TodoListState)
  
  state: TodoListState;

  @IsString()
  @IsNotEmpty()
  content: string;
}
