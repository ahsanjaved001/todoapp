import Todo from '../Mysql/Models/Todo';
import TodoEntity from '../../Domain/Todo/TodoEntity';
import PaginationOptions from '../../Domain/Utils/PaginationOptions';
import PaginatedCollection from '../../Domain/Utils/PaginatedCollection';
import ITodoRepository from '../../Domain/Todo/ITodoRepository';


class TodoStore implements ITodoRepository {

    async fetchAllForUser(userID: string, pagination: PaginationOptions){
        const todos = await Todo.findAndCountAll({ limit: pagination.limit(), offset: pagination.offset(), where: { userID } });
        const todosCollection = todos.rows.map(todo => {
            return TodoEntity.createFromDb(todo);
        });
        const paginatedCollection = new PaginatedCollection<TodoEntity>(pagination, todos.count, todosCollection);

        return paginatedCollection.getPaginatedData();
    }

    async fetchByID(todoID: string, userID: string){
        const todo = await Todo.findOne({where: {id: todoID, userID}});
        return TodoEntity.createFromDb(todo);
    }

    async add(todo: TodoEntity){
        const result = await Todo.create(todo.toObj());
        return TodoEntity.createFromDb(result);
    }

    async update(todo: TodoEntity){
        const todoObj = todo.toObj();
        await Todo.update(todoObj, { where: { userID: todo.userID, id: todo.id}});
        return true;
    }

    async remove(todo: TodoEntity){
        const todoObj = todo.toObj();
        await Todo.destroy({ where: { userID: todo.userID, id: todo.id}});
        return true;
    }
}

export default TodoStore;