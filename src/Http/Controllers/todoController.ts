import TodoService from '../../App/Application/TodoService';

class TodoController {
    async getAllTodos (req, res) {
        const todos = await TodoService.fetchAllTodos(req);  
        
        res.status(200).json({
            status: 'success',
            length: todos.length,
            data: {
                todos
            }
        });
    };

    async createTodo (req, res) {
        const todo = await TodoService.addTodo(req);
    
        res.status(200).json({
            status: 'success',
            message: "Todo created",
            data: {
                todo
            }
        });
    };

    async updateTodo (req, res) {
        await TodoService.updateTodo(req);
    
        res.status(200).json({
            message: "Todo updated successfully",
        });
    };

    async deleteTodo (req, res) {
        await TodoService.removeTodo(req);
        res.status(200).json({
            message: "Todo deleted successfully"
        });
    };
}

export default TodoController;
