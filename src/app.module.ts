import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosService } from './usuarios/usuarios.service';
import { UsuariosController } from './usuarios/usuarios.controller';
import { AlunosModule } from './alunos/alunos.module';
import { PlanosModule } from './planos/planos.module';
import { PagamentosModule } from './pagamentos/pagamentos.module';
import { PrismaModule } from 'prisma/prisma.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [AlunosModule, PlanosModule, PagamentosModule, PrismaModule, UsuariosModule],
  controllers: [AppController, UsuariosController],
  providers: [AppService, UsuariosService],
})
export class AppModule {}
