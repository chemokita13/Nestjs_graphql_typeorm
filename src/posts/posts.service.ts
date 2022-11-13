import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorService } from 'src/author/author.service';
import { Author } from 'src/author/entities/author.entity';
import { Repository } from 'typeorm';
import { CreatePostInput } from './dto/create-post.input';
import { Post } from './post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
    private authorsService: AuthorService,
  ) {}

  findAll(): Promise<Post[]> {
    return this.postsRepository.find();
  }

  findOne(id: number): Promise<Post> {
    return this.postsRepository.findOne({
      where: {
        id,
      },
    });
  }

  createPost(post: CreatePostInput): Promise<Post> {
    const newPost = this.postsRepository.create(post);
    return this.postsRepository.save(newPost);
  }

  deletePost(postId: number): Promise<Post> {
    this.postsRepository.delete(postId);
    return this.postsRepository.findOneById(postId);
  }

  getAuthor(userId: number): Promise<Author> {
    return this.authorsService.findOne(userId);
  }
}
