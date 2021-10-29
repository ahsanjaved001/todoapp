import UserEntity from './UserEntity';

interface UserRepository {
    fetchAll(): Promise<UserEntity[]>
    fetchByEmail(email: String): Promise<UserEntity>
    fetchByID(id: string): Promise<UserEntity>
    add(user: UserEntity): Promise<boolean>
    update(user: UserEntity): Promise<boolean>
    remove(user: UserEntity): Promise<boolean>
}

export default UserRepository;