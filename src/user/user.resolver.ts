import { Query, Resolver } from '@nestjs/graphql';
import { User } from './models/user';
import { UserService } from './services/user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User, { name: 'user', nullable: true })
  async getUser(): Promise<User> {
    return this.userService.getUser();
  }
}
