import { Module } from '@nestjs/common';
import { PlanosService } from './planos.service';
import { PlanosController } from './planos.controller';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule], // Importa o Prisma para usar no service
  controllers: [PlanosController],
  providers: [PlanosService],
})
export class PlanosModule {}
