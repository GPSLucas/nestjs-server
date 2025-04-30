import { Injectable } from '@nestjs/common';
import { Tarefa } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTarefaDto } from './dto/create-tarefa.dto';

@Injectable()
export class TarefaService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Tarefa[]> {
    return this.prisma.tarefa.findMany({ orderBy: { created_at: 'desc' } });
  }

  async create(data: CreateTarefaDto): Promise<Tarefa> {
    return this.prisma.tarefa.create({ data });
  }

  async delete(id: number): Promise<Tarefa> {
    return this.prisma.tarefa.delete({ where: { id } });
  }
}
