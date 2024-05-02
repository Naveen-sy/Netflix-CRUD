
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class SubscriptionModel {
  @Prop()
  plan: string;

  @Prop()
  price: number;
}

export const SubscriptionSchema = SchemaFactory.createForClass(SubscriptionModel);
