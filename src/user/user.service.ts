import { Injectable } from '@nestjs/common';
import { loginDto, registerDto } from './dto/registerDto.dto';
import { PrismaService } from 'prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  register(dto: registerDto) {
    try {
      console.log('dto===', dto);
      // return await this.prisma.user.findMany();
      // const users = await prisma.user.findMany({ take: 10 })
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }

  login(dto: loginDto) {
    try {
      console.log('dto===', dto);
      return dto;
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
}
