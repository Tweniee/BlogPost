import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auth } from './entities/auth.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth) private readonly userRepository: Repository<Auth>,
  ) {}
  create(createAuthDto: CreateAuthDto) {
    const user: Auth = new Auth();
    user.name = createAuthDto.name;
    user.age = createAuthDto.age;
    user.email = createAuthDto.email;
    user.username = createAuthDto.username;
    user.password = createAuthDto.password;
    user.gender = createAuthDto.gender;
    return this.userRepository.save(user);
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
