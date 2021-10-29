import Todo from '../Mysql/Models/Todo';
import TodoEntity from '../../Domain/Todo/TodoEntity';
import PaginationOptions from '../../Domain/Utils/PaginationOptions';


class TodoStore {

    static async fetchAllForUser(userID: string, pagination: PaginationOptions){
        const todos = await Todo.findAll({ limit: pagination.limit(), offset: pagination.offset(), where: { userID } });

        return todos.map(todo => {
            return TodoEntity.createFromDb(todo);
        });
    }

    static async fetchByID(todoID: string, userID: string){
        const todo = await Todo.findOne({where: {id: todoID, userID}});
        return TodoEntity.createFromDb(todo);
    }

    static async add(todo: TodoEntity){
        return await Todo.create(todo.toObj());
    }

    static async update(todo: TodoEntity){
        const todoObj = todo.toObj();
        await Todo.update(todoObj, { where: { userID: todo.userID, id: todo.id}});
        return true;
    }

    static async remove(todo: TodoEntity){
        const todoObj = todo.toObj();
        await Todo.destroy({ where: { userID: todo.userID, id: todo.id}});
        return true;
    }
}

export default TodoStore;
