import { Module } from '@nestjs/common';
import { TarefaService } from './tarefa.service';
import { TarefaController } from './tarefa.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [TarefaController],
  providers: [TarefaService],
})
export class TarefaModule {}
