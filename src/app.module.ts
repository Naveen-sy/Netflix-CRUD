

import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common'; 
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { JwtMiddleware } from './auth/jwt.middleware'; 
import { MongooseModule } from '@nestjs/mongoose';
import { MovieSchema } from './models/movie.model'; 
import { UserSchema } from './models/user.model'; 
import { SubscriptionSchema } from './models/subscription.model'; 
import { AppController } from './app.controller';
import { MovieService } from './services/movie.service';
import { UserService } from './services/user.service';
import { SubscriptionService } from './services/subscription.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/netflix'),
    MongooseModule.forFeature([
      { name: 'Movie', schema: MovieSchema },
      { name: 'User', schema: UserSchema },
      { name: 'Subscription', schema: SubscriptionSchema },
    ]),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'fallback-secret-key',
      signOptions: { expiresIn: '1h' },
    }),
    
  ],
  controllers: [AppController, AuthController], 
  providers: [AuthService, MovieService, UserService, SubscriptionService], 
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(JwtMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL }); 
  }
}