import { ApiProperty } from '@nestjs/swagger';

export class registerDto {
  @ApiProperty({ example: 'john@example.com' })
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty({ example: 'John Doe' })
  fullName: string;

  @ApiProperty({ example: 'DoeXXX' })
  userName: string;
}

export class loginDto {
  @ApiProperty({ example: 'john@example.com' })
  email: string;

  @ApiProperty()
  password: string;
}
