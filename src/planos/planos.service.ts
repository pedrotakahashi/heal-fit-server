import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.servie';

@Injectable()
export class PlanosService {
  constructor(private prisma: PrismaService) {}

  async criarPlano(dados: any) {
    return this.prisma.plano.create({ data: dados });
  }

  async listarPlanos() {
    return this.prisma.plano.findMany();
  }

  async buscarPorId(id: number) {
    return this.prisma.plano.findUnique({ where: { id } });
  }

  async atualizarPlano(id: number, dados: any) {
    return this.prisma.plano.update({ where: { id }, data: dados });
  }

  async deletarPlano(id: number) {
    return this.prisma.plano.delete({ where: { id } });
  }
}
