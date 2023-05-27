import { Injectable } from '@nestjs/common';
import { User } from '../models/user';

@Injectable()
export class UserService {
  private users: User[] = [];

  public createUser(): User {}

  public updateUser(): User {}

  public getUserById(): User {}

  public getUsers(): User[] {}

  public deleteUser(): User {}
}
