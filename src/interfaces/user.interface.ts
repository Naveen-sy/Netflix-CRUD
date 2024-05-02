
import { Document } from 'mongoose';

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  age: number; // Add age field
  language: string; // Add language field
}