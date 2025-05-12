import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { loginDto, registerDto } from './dto/registerDto.dto';
import { PrismaService } from 'prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async findById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async register(dto: registerDto) {
    try {
      // Kiểm tra email đã tồn tại chưa
      const existingUser = await this.prisma.user.findUnique({
        where: { email: dto.email },
      });

      if (existingUser) {
        throw new ConflictException('Email already exists');
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(dto.password, 10);

      // Tạo user mới
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          username: dto.userName,
          password: hashedPassword,
          fullName: dto.fullName,
        },
      });

      // Tạo JWT token
      const payload = { sub: user.id, email: user.email };
      const token = await this.jwtService.signAsync(payload);

      // Trả về thông tin user và token
      const { password: _, ...result } = user;
      return {
        user: result,
        token,
      };
    } catch (error) {
      if (error instanceof ConflictException) {
        throw error;
      }
      throw new Error('Registration failed');
    }
  }

  async login(dto: loginDto) {
    try {
      // Tìm user theo email
      const user = await this.prisma.user.findUnique({
        where: { email: dto.email },
      });

      // Kiểm tra user có tồn tại không
      if (!user) {
        throw new UnauthorizedException('Invalid credentials');
      }

      // Kiểm tra password
      const isPasswordValid = await bcrypt.compare(dto.password, user.password);
      if (!isPasswordValid) {
        throw new UnauthorizedException('Invalid credentials');
      }

      // Tạo JWT token
      const payload = { sub: user.id, email: user.email };
      const token = await this.jwtService.signAsync(payload);

      // Trả về thông tin user và token
      const { password: _, ...result } = user;
      return {
        user: result,
        token,
      };
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      throw new Error('Login failed');
    }
  }

  viewUserDetail(id: string) {
    // try {
    //   console.log('dto===', id);
    //   return this.prisma.user.findUnique({ where: { id } });
    // } catch (error) {
    //   throw new Error('Method not implemented.');
    // }
  }
}
