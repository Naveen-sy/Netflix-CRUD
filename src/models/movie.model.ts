
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class MovieModel {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  genre: string;

  @Prop()
  year: number;
}

export const MovieSchema = SchemaFactory.createForClass(MovieModel);
