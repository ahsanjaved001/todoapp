import TodoEntity from '../Domain/Todo/TodoEntity';
import TodoStore  from '../Infrastructure/MySQLRepository/TodoRepository';
import Pagination from '../Domain/Utils/PaginationOptions';

class TodoService {
    static async fetchAllTodos(req: any){
        const {page,size} = req.query;
        const pagination = new Pagination(page ? parseInt(page) : page, size ? parseInt(size) : size);
        return await TodoStore.fetchAllForUser(req.session.userID, pagination);
    }

    static async addTodo(req: any){
        const {name, description} = req.body;
        let todo = TodoEntity.createFromInput(req.session.userID, name, description);
        await TodoStore.add(todo);

        return todo;
    }

    static async updateTodo(req: any){
        const {name, description} = req.body;
        const id: string = req.params.id;
        const userID: string = req.session.userID;
        const todo = await TodoStore.fetchByID(id, userID);
        todo.name = name;
        todo.description = description;
        return await TodoStore.update(todo);
    }

    static async removeTodo(req: any){
        const id: string = req.params.id;
        const userID: string = req.session.userID;
        const todo = await TodoStore.fetchByID(id, userID);
        return await TodoStore.remove(todo);
    }
}

export default TodoService;