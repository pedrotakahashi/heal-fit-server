import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.servie';

@Injectable()
export class PagamentosService {
  constructor(private prisma: PrismaService) {}

  async criarPagamento(alunoId: number, valor: number, metodoPagamento: string) {
    return this.prisma.pagamento.create({
      data: {
        alunoId,
        valor,
        metodoPagamento,
        status: 'pendente', // Novo pagamento começa como pendente
      },
    });
  }

  async listarPagamentos() {
    return this.prisma.pagamento.findMany({
      include: { Aluno: true },
    });
  }

  async atualizarStatusPagamento(id: number, status: string) {
    return this.prisma.pagamento.update({
      where: { id },
      data: { status },
    });
  }

  async deletarPagamento(id: number) {
    return this.prisma.pagamento.delete({ where: { id } });
  }
}
