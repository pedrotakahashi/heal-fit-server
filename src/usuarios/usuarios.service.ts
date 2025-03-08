import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { PrismaService } from 'prisma/prisma.servie';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  async criarUsuario(username: string, password: string) {
    const hashedPassword = await hash(password, 10);
    return this.prisma.usuario.create({
      data: { username, password: hashedPassword },
    });
  }

  async listarUsuarios() {
    return this.prisma.usuario.findMany();
  }

  async buscarPorId(id: number) {
    return this.prisma.usuario.findUnique({ where: { id } });
  }
}

