import { Args, Query, Resolver } from '@nestjs/graphql';
import { User } from './models/user';
import { UserService } from './services/user.service';
import { GetUserArgs } from './dto/args/get-user.args';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User, { name: 'user', nullable: true })
  async getUser(@Args() getUserArgs: GetUserArgs): Promise<User> {
    return this.userService.getUserById();
  }
}
