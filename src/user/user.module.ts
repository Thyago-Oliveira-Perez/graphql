import { Module } from '@nestjs/common';
import { UsersResolver } from './resolvers/user.resolver';
import { UserService } from './services/user.service';
import { UserRepository } from './repositories/user.repository';

@Module({
  imports: [],
  controllers: [],
  providers: [UsersResolver, UserService, UserRepository],
})
export class UserModule {}
