import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';


import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';
import { BorrowModule } from './borrow/borrow.module';
import {AuditLogModule} from './auditlog/auditlog.module'
import { AuthorModule } from './author/author.module';


@Module({
  imports: [UserModule,TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'librarymanagementDB',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }), AuthorModule, AuditLogModule, BorrowModule, BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}