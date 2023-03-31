import { Resolver, Query, Args } from '@nestjs/graphql';
@Resolver()
export class UsersResolver {
  @Query(() => String)
  async getWorld(): Promise<string> {
    return 'Hello world';
  }
}
