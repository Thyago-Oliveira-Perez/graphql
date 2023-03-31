import { Module } from '@nestjs/common';
import { UsersResolver } from './resolvers/user.resolver';

@Module({
  imports: [],
  controllers: [],
  providers: [UsersResolver],
})
export class UserModule {}
