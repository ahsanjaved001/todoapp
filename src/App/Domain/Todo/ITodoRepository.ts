import TodoEntity from './TodoEntity';
import PaginationOptions from '../Utils/PaginationOptions';

interface TodoRepository {
    fetchAllForUser(userID: string, paginationOptions: PaginationOptions): Promise<{totalItems: number; totalPages: number; currentPage: number; perPage: number; data: TodoEntity[];}>
    fetchByID(id: string, userID: string): Promise<TodoEntity>
    add(todo: TodoEntity): Promise<TodoEntity>
    update(todo: TodoEntity): Promise<boolean>
    remove(todo: TodoEntity): Promise<boolean>
}

export default TodoRepository;