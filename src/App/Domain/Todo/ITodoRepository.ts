import TodoEntity from './TodoEntity';

interface UserRepository {
    fetchAllForUser(): Promise<TodoEntity[]>
    fetchByID(id: string): Promise<TodoEntity>
    add(todo: TodoEntity): Promise<boolean>
    update(todo: TodoEntity): Promise<boolean>
    remove(todo: TodoEntity): Promise<boolean>
}

export default UserRepository;