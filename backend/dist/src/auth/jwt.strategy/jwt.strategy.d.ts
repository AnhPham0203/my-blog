import { UserService } from 'src/user/user.service';
import { ConfigService } from '@nestjs/config';
interface JwtPayload {
    sub: string;
    email: string;
}
declare const JwtStrategy_base: new (...args: any) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly usersService;
    private readonly configService;
    constructor(usersService: UserService, configService: ConfigService);
    validate(payload: JwtPayload): Promise<{
        email: string;
        password: string;
        fullName: string | null;
        id: string;
        username: string;
        avatarUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
}
export {};
