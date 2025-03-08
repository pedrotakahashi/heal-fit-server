import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  async criar(@Body() dados) {
    return this.usuariosService.criarUsuario(dados.username, dados.password);
  }

  @Get()
  async listar() {
    return this.usuariosService.listarUsuarios();
  }

  @Get(':id')
  async buscar(@Param('id') id: number) {
    return this.usuariosService.buscarPorId(Number(id));
  }
}
