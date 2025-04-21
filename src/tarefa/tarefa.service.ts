import { Injectable } from '@nestjs/common';
import { PrismaClient, Tarefa } from '@prisma/client';
import { CreateTarefaDto } from './dto/create-tarefa.dto';

const prisma = new PrismaClient();

@Injectable()
export class TarefaService {
  async findAll(): Promise<Tarefa[]> {
    return prisma.tarefa.findMany({ orderBy: { created_at: 'desc' } });
  }

  async create(data: CreateTarefaDto): Promise<Tarefa> {
    return prisma.tarefa.create({ data });
  }

  async delete(id: number): Promise<Tarefa> {
    return prisma.tarefa.delete({ where: { id } });
  }
}
