import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.servie';

@Module({
  providers: [PrismaService],
  exports: [PrismaService], // 🔹 Agora Prisma pode ser injetado nos outros módulos
})
export class PrismaModule {}
