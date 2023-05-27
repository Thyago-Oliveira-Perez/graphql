import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './models/user';
import { UserService } from './services/user.service';
import { GetUserArgs } from './dto/args/get-user.args';
import { GetUsersArgs } from './dto/args/get-users.args';
import { CreateUserInput } from './dto/input/create-user.input';
import { UpdateUserInput } from './dto/input/update-user.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User, { name: 'user', nullable: true })
  async getUser(@Args() getUserArgs: GetUserArgs): Promise<User> {
    return this.userService.getUserById();
  }

  @Query(() => [User], { name: 'users', nullable: 'items' })
  async getUsers(@Args() getUsersargs: GetUsersArgs): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Mutation(() => User)
  async createUser(
    @Args('createUserData') createUserData: CreateUserInput,
  ): User {
    return this.userService.createUser();
  }

  @Mutation(() => User)
  async updateUser(
    @Args('updateUserData') updateUserData: UpdateUserInput,
  ): User {
    return this.userService.updateUser();
  }
}
