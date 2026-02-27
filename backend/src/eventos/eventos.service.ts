import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evento } from './evento.entity';

@Injectable()
export class EventosService {
    constructor(
        @InjectRepository(Evento)
        private eventoRepository: Repository<Evento>,
    ) {}

    async findAll(): Promise<Evento[]> {
        return this.eventoRepository.find();
    }

    async create(data: Partial<Evento>): Promise<Evento> {
        const evento = this.eventoRepository.create(data);
        return this.eventoRepository.save(evento);
    }

}
