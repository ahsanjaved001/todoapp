const TodoService = require('./../../app/application/TodoService');

exports.getAllTodos = async (req, res, next) => {
    const todos = await TodoService.fetchAllTodos(req);    
    
    res.status(200).json({
        status: 'success',
        length: todos.length,
        data: {
            todos
        }
    });
};

exports.createTodo = async (req, res, next) => {
    const todo = await TodoService.addTodo(req);

    res.status(200).json({
        status: 'success',
        message: "Todo created",
        data: {
            todo
        }
    });
};

exports.updateTodo = async (req, res, next) => {
    await TodoService.updateTodo(req);

    res.status(200).json({
        message: "Todo updated successfully",
    });
};

exports.deleteTodo = async (req, res, next) => {
    TodoService.removeTodo(req);
    res.status(200).json({
        message: "Todo deleted successfully"
    });
};
