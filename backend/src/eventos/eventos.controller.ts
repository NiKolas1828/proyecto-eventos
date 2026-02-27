import { Controller, Get, Post, Body } from '@nestjs/common';
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
}
