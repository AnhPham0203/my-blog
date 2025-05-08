import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    ConfigModule.forRoot({
      isGlobal: true, // không cần import lại nhiều lần
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
