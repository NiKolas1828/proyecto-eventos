import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { EventosService } from './eventos.service';
import { Evento } from './evento.entity';

@Controller('eventos')
export class EventosController {
  constructor(private readonly eventosService: EventosService) {}

  @Get()
  findAll(): Promise<Evento[]> {
    return this.eventosService.findAll();
  }

  @Post()
  create(@Body() body: Partial<Evento>): Promise<Evento> {
    return this.eventosService.create(body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.eventosService.delete(Number(id))
  }

}
