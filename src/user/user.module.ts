import { Module } from '@nestjs/common';
import { UsersResolver } from './resolvers/user.resolver';
import { UserService } from './services/user.service';

@Module({
  imports: [],
  controllers: [],
  providers: [UsersResolver, UserService],
})
export class UserModule {}
