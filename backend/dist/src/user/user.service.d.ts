import { loginDto, registerDto } from './dto/registerDto.dto';
import { PrismaService } from 'prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
export declare class UserService {
    private readonly prisma;
    private readonly jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    findById(id: string): Promise<{
        email: string;
        password: string;
        fullName: string | null;
        id: string;
        username: string;
        avatarUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
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
