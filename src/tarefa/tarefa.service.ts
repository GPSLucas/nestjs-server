import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTarefaDto } from './dto/create-tarefa.dto';

@Injectable()
export class TarefaService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.tarefa.findMany({ orderBy: { created_at: 'desc' } });
  }

  async create(data: CreateTarefaDto) {
    return this.prisma.tarefa.create({ data });
  }

  async delete(id: number) {
    return this.prisma.tarefa.delete({ where: { id } });
  }
}
