import TodoEntity from '../../Domain/Todo/TodoEntity';
import TodoStore  from '../../Infrastructure/MySQLRepository/TodoRepository';
import Pagination from '../../Domain/Utils/PaginationOptions';
import FetchAllTodosForUsers from './FetchAllTodoForUsersDTO';
import CreateTodoDTO from './CreateTodoDTO';
import UpdateTodoDTO from './UpdateTodoDTO';
import RemoveTodoDTO from './RemoveTodoDTO';

const todoStore = new TodoStore();

class TodoService {
    static async fetchAllTodos(fetchAllTodoForUsersDTO: FetchAllTodosForUsers){
        const {page,size} = fetchAllTodoForUsersDTO;
        const pagination = new Pagination(page, size);
        return await todoStore.fetchAllForUser(fetchAllTodoForUsersDTO.userID, pagination);
    }

    static async addTodo(createTodoDTO: CreateTodoDTO){
        const {userID, name, description} = createTodoDTO;
        let todo = TodoEntity.createFromInput(userID, name, description);
        await todoStore.add(todo);

        return todo;
    }

    static async updateTodo(updateTodoDTO: UpdateTodoDTO){
        const {id, userID, name, description} = updateTodoDTO;
        const todo = await todoStore.fetchByID(id, userID);
        todo.name = name;
        todo.description = description;
        return await todoStore.update(todo);
    }

    static async removeTodo(removeTodoDTO: RemoveTodoDTO){
        const {id, userID} = removeTodoDTO;
        const todo = await todoStore.fetchByID(id, userID);
        return await todoStore.remove(todo);
    }
}

export default TodoService;