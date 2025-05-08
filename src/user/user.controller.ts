import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation } from '@nestjs/swagger';
import { loginDto, registerDto } from './dto/registerDto.dto';

@Controller('user')
export class UserController {
  logger: any;
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Register a new user' })
  @Post('register')
  register(@Body() dto: registerDto) {
    // this.logger.log(`[register] started`, dto);

    const data = this.userService.register(dto);

    return data;
  }

  @ApiOperation({ summary: 'Login' })
  @Post('login')
  login(@Body() dto: loginDto) {
    // this.logger.log(`[register] started`, dto);

    const data = this.userService.login(dto);

    return data;
  }
}
