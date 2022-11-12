import { Controller, Get, Body, Param } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post } from './post.entity';

@Controller('posts')
export class PostsController {
  constructor(
    private postsService: PostsService
    ) {}

  @Get('findAll')
  findAll(){
    return this.postsService.findAll()
  }

  @Get('findOne/:id')
  findOne(@Param('id') id: number){
    return this.postsService.findOne(id)
  }

  @Get('createPost')
  createPost(@Body() req: Post){
    return this.postsService.createPost(req)
  }

  @Get('getAuthor/:id')
  getAuthor(@Param('id') id: number){
    return this.postsService.getAuthor(id)
  }

}
