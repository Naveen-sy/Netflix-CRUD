
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMovieDto } from '../dto/create-movie.dto';
import { Movie } from '../interfaces/movie.interface';
import { UpdateMovieDto } from '../dto/update-movie.dto';
import { User } from '../interfaces/user.interface'; 

@Injectable()
export class MovieService {
  constructor(@InjectModel('Movie') private readonly movieModel: Model<Movie>) {}

  async createMovie(createMovieDto: CreateMovieDto): Promise<Movie> {
    const newMovie = new this.movieModel(createMovieDto);
    return newMovie.save();
  }

  async getAllMovies(): Promise<Movie[]> {
    return this.movieModel.find().exec();
  }

  async getMovieById(id: string): Promise<Movie> {
    return this.movieModel.findById(id).exec();
  }

  async updateMovie(id: string, updateMovieDto: UpdateMovieDto): Promise<Movie> {
    return this.movieModel.findByIdAndUpdate(id, updateMovieDto, { new: true }).exec();
  }

  async deleteMovie(id: string): Promise<Movie> {
    return this.movieModel.findByIdAndDelete(id).exec();
  }

  async getKidsMovies(user: User): Promise<Movie[]> {
    
    return this.movieModel.find({ agelimit: { $lte: user.age } }).exec();
  }
}
