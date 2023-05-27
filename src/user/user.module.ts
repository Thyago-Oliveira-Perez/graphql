import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserResolver } from './user.resolver';

@Module({
  providers: [UserService, UserResolver],
})
export class UserModule {}
