
import { Controller, Get, Req, Param, UnauthorizedException } from '@nestjs/common';
import { MovieService } from '../services/movie.service';
import { UserService } from '../services/user.service';

@Controller('movies')
export class MovieController {
  constructor(
    private readonly movieService: MovieService,
    private readonly userService: UserService,
  ) {}

  @Get()
  async getAllMovies(@Req() req) {
    const { username } = req.user; 
    const user = await this.userService.findUserByUsername(username);

    if (user.age < 18) {
      return this.movieService.getKidsMovies(user); 
    } else {
      return this.movieService.getAllMovies();
    }
  }
}

