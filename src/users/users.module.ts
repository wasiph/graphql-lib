import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PasswordService } from 'src/auth/password/password.service';
import { UsersResolver } from './users.resolver';

@Module({
  providers: [UsersResolver, UsersService, PasswordService],
})
export class UsersModule {}
