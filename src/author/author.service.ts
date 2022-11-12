import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorService {

  constructor(@InjectRepository(Author) private authorRepository: Repository<Author>) { }

  create(createAuthorInput: CreateAuthorInput): Promise<Author> {
    const author = this.authorRepository.create(createAuthorInput)
    return this.authorRepository.save(author)
  }

  findAll(): Promise<Author[]> {
    return this.authorRepository.find()
  }

  findOne(id: number): Promise<Author> {
    return this.authorRepository.findOne({
      where: {
        id
      }
    })
  }

  update(id: number, updateAuthorInput: UpdateAuthorInput) {
    return `This action updates a #${id} author`;
  }

  remove(id: number) {
    return `This action removes a #${id} author`;
  }
}
