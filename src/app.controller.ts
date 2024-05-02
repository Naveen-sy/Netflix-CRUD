
import { Controller, Get, Param, Post, Put, Delete, Body } from '@nestjs/common';
import { MovieService } from './services/movie.service';
import { SubscriptionService } from './services/subscription.service';
import { UserService } from './services/user.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller()
export class AppController {
  constructor(
    private readonly movieService: MovieService,
    private readonly subscriptionService: SubscriptionService,
    private readonly userService: UserService,
  ) {}

  @Get('/movies')
  getAllMovies() {
    return this.movieService.getAllMovies();
  }

  @Get('/movies/:id')
  getMovieById(@Param('id') id: string) {
    return this.movieService.getMovieById(id);
  }

  @Post('/movies')
  createMovie(@Body() createMovieDto: CreateMovieDto) {
    return this.movieService.createMovie(createMovieDto);
  }

  @Put('/movies/:id')
  updateMovie(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.movieService.updateMovie(id, updateMovieDto);
  }

  @Delete('/movies/:id')
  deleteMovie(@Param('id') id: string) {
    return this.movieService.deleteMovie(id);
  }

  @Get('/subscriptions')
  getAllSubscriptions() {
    return this.subscriptionService.getAllSubscriptions();
  }

  @Get('/subscriptions/:id')
  getSubscriptionById(@Param('id') id: string) {
    return this.subscriptionService.getSubscriptionById(id);
  }

  @Post('/subscriptions')
  createSubscription(@Body() createSubscriptionDto: CreateSubscriptionDto) {
    return this.subscriptionService.createSubscription(createSubscriptionDto);
  }

  @Put('/subscriptions/:id')
  updateSubscription(@Param('id') id: string, @Body() updateSubscriptionDto: UpdateSubscriptionDto) {
    return this.subscriptionService.updateSubscription(id, updateSubscriptionDto);
  }

  @Delete('/subscriptions/:id')
  deleteSubscription(@Param('id') id: string) {
    return this.subscriptionService.deleteSubscription(id);
  }

  @Get('/users')
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get('/users/:id')
  getUserById(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }

  @Post('/users')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Put('/users/:id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete('/users/:id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}

