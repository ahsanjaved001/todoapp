import TodoService from '../../App/Application/Todo/TodoService';
import FetchAllTodosForUsers from '../../App/Application/Todo/FetchAllTodoForUsersDTO';
import CreateTodoDTO from '../../App/Application/Todo/CreateTodoDTO';
import UpdateTodoDTO from '../../App/Application/Todo/UpdateTodoDTO';
import RemoveTodoDTO from '../../App/Application/Todo/RemoveTodoDTO';

class TodoController {
    async getAllTodos (req, res) {
        const input = new FetchAllTodosForUsers(req);
        const todos = await TodoService.fetchAllTodos(input);  
        
        res.status(200).json({
            status: 'success',
            data: {
                todos
            }
        });
    };

    async createTodo (req, res) {
        const input = new CreateTodoDTO(req);
        const todo = await TodoService.addTodo(input);
    
        res.status(200).json({
            status: 'success',
            message: "Todo created",
            data: {
                todo
            }
        });
    };

    async updateTodo (req, res) {
        const input = new UpdateTodoDTO(req);
        await TodoService.updateTodo(input);
    
        res.status(200).json({
            message: "Todo updated successfully",
        });
    };

    async deleteTodo (req, res) {
        const input = new RemoveTodoDTO(req);
        await TodoService.removeTodo(input);
        res.status(200).json({
            message: "Todo deleted successfully"
        });
    };
}

export default TodoController;
