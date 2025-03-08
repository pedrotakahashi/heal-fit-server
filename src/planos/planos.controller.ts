import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PlanosService } from './planos.service';

@Controller('planos')
export class PlanosController {
  constructor(private readonly planosService: PlanosService) {}

  @Post()
  criar(@Body() dados) {
    return this.planosService.criarPlano(dados);
  }

  @Get()
  listar() {
    return this.planosService.listarPlanos();
  }

  @Get(':id')
  buscar(@Param('id') id: number) {
    return this.planosService.buscarPorId(Number(id));
  }

  @Put(':id')
  atualizar(@Param('id') id: number, @Body() dados) {
    return this.planosService.atualizarPlano(id, dados);
  }

  @Delete(':id')
  deletar(@Param('id') id: number) {
    return this.planosService.deletarPlano(id);
  }
}
