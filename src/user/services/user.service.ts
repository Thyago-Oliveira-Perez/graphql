import { Injectable } from '@nestjs/common';
import { User } from '../models/user';
import { CreateUserInput } from '../dto/input/create-user.input';
import { v4 as uuid } from 'uuid';
import { UpdateUserInput } from '../dto/input/update-user.input';

@Injectable()
export class UserService {
  private users: User[] = [];

  public async createUser(createUserData: CreateUserInput): Promise<User> {
    const user: User = {
      id: uuid(),
      ...createUserData,
    };

    await this.users.push(user);

    return user;
  }

  public async updateUser(updateUserData: UpdateUserInput): Promise<User> {
    const user = this.users.find((user) => user.id === updateUserData.id);

    await Object.assign(user, updateUserData);

    return user;
  }

  public async getUserById(): Promise<User> {}

  public async getUsers(): Promise<User[]> {}

  public async deleteUser(): Promise<User> {}
}
