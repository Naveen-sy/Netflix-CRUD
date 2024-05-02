import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @MaxLength(500)
  readonly description: string;

  @IsString()
  @MaxLength(50)
  readonly genre: string;

  @IsNumber()
  readonly year: number;


}
