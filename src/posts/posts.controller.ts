import { Controller, Get, Body, Param } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostInput } from './dto/create-post.input';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get('findAll')
  findAll() {
    return this.postsService.findAll();
  }

  @Get('findOne/:id')
  findOne(@Param('id') id: number) {
    return this.postsService.findOne(id);
  }

  @Get('createPost')
  async createPost(@Body() req: CreatePostInput) { 
    // validate if authorId exists
    if (await this.postsService.getAuthor(req.authorId)) {
      return this.postsService.createPost(req);
    } else {
      return {
        statusCode: 400,
        message: ['authorId not valid'],
        error: 'Bad Request',
      };
    }
  }

  @Get('deletePost/:id')
  deletePost(@Param('id') id: number) {
    return this.postsService.deletePost(id);
  }

  @Get('getAuthor/:id')
  getAuthor(@Param('id') id: number) {
    return this.postsService.getAuthor(id);
  }
}
