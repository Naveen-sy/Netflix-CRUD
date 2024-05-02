
import { Document } from 'mongoose';

export interface Subscription extends Document {
  plan: string;
  agelimit: number;
  price: number;
}
