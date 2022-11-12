import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { AuthorModule } from 'src/author/author.module';
import { PostsController } from './posts.controller';


@Module({
  imports: [TypeOrmModule.forFeature([Post]), AuthorModule],
  providers: [PostsService, PostsResolver],
  controllers: [PostsController]
})
export class PostsModule { }
