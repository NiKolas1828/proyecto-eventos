import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventosModule } from './eventos/eventos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'postgres',
      database: 'proyecto_eventos_db',
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    EventosModule,
  ]
})
export class AppModule {}
