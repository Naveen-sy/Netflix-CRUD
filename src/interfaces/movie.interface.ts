
import { Document } from 'mongoose';

export interface Movie extends Document {
  title: string;
  description: string;
  genre: string;
  year: number;
  agelimit: number; 
}


