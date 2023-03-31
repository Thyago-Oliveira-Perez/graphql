import { Resolver, Query } from '@nestjs/graphql';
import { UserService } from '../services/user.service';
import { User } from '../entities/user.entity';
@Resolver()
export class UsersResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => String)
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAll();
  }
}
