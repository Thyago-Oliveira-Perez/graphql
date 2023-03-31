import { Resolver, Query } from '@nestjs/graphql';
import { UserService } from '../services/user.service';
@Resolver()
export class UsersResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => String)
  async getAllUsers(): Promise<string> {
    return this.userService.getAll();
  }
}
