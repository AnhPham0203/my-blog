import { UserService } from './user.service';
import { loginDto, registerDto } from './dto/registerDto.dto';
export declare class UserController {
    private readonly userService;
    logger: any;
    constructor(userService: UserService);
    register(dto: registerDto): Promise<{
        user: {
            email: string;
            fullName: string | null;
            id: string;
            username: string;
            avatarUrl: string | null;
            createdAt: Date;
            updatedAt: Date;
        };
        token: string;
    }>;
    login(dto: loginDto): Promise<{
        user: {
            email: string;
            fullName: string | null;
            id: string;
            username: string;
            avatarUrl: string | null;
            createdAt: Date;
            updatedAt: Date;
        };
        token: string;
    }>;
    viewUserDetail(id: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        email: string;
        password: string;
        fullName: string | null;
        id: string;
        username: string;
        avatarUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
