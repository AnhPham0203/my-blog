import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class registerDto {
  @ApiProperty({ example: 'john@example.com' })
  email: string;

  @ApiProperty()
  password: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    required: false,
    default: 'John Smith',
  })
  fullName?: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'DoeXXX' })
  userName: string;
}

export class loginDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'john@example.com' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  password: string;
}
