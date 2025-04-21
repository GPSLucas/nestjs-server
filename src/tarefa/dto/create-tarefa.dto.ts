import { IsString } from 'class-validator';

export class CreateTarefaDto {
  @IsString()
  title: string;
}
