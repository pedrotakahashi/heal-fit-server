import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.servie';

@Injectable()
export class AlunosService {
  constructor(private prisma: PrismaService) {}

  async criarAluno(dados: any) {
    return this.prisma.aluno.create({ data: dados });
  }

  async listarAlunos() {
    return this.prisma.aluno.findMany({ include: { Plano: true } });
  }

  async buscarPorId(id: number) {
    return this.prisma.aluno.findUnique({ where: { id }, include: { Plano: true } });
  }

  async atualizarAluno(id: number, dados: any) {
    return this.prisma.aluno.update({ where: { id }, data: dados });
  }

  async deletarAluno(id: number) {
    return this.prisma.aluno.delete({ where: { id } });
  }
}
