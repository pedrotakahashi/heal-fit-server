import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AlunosService } from './alunos.service';

@Controller('alunos')
export class AlunosController {
  constructor(private readonly alunosService: AlunosService) {}

  @Post()
  criar(@Body() dados) {
    return this.alunosService.criarAluno(dados);
  }

  @Get()
  listar() {
    return this.alunosService.listarAlunos();
  }

  @Get(':id')
  buscar(@Param('id') id: number) {
    return this.alunosService.buscarPorId(Number(id));
  }

  @Put(':id')
  atualizar(@Param('id') id: number, @Body() dados) {
    return this.alunosService.atualizarAluno(id, dados);
  }

  @Delete(':id')
  deletar(@Param('id') id: number) {
    return this.alunosService.deletarAluno(id);
  }
}
