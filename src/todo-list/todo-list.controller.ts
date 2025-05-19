import { Body, Controller, Post } from '@nestjs/common';
import { TodoListService } from './todo-list.service';
import { CreateTodoListDto } from './dto/User-created.dto';

@Controller('todo-list')
export class TodoListController {
    constructor (private readonly todoListServices : TodoListService){}


    @Post()
    async createTodoList(@Body() createTodoListDto : CreateTodoListDto){
        const newTodoList = await this.todoListServices.createTodoList(createTodoListDto)
        return newTodoList
    }
}
