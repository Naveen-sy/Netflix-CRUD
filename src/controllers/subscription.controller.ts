
import { Controller, Post, Body, Req, UnauthorizedException } from '@nestjs/common';
import { SubscriptionService } from '../services/subscription.service';
import { UserService } from '../services/user.service';
import { CreateSubscriptionDto } from '../dto/create-subscription.dto'; 

@Controller('subscriptions')
export class SubscriptionController {
  constructor(
    private readonly subscriptionService: SubscriptionService,
    private readonly userService: UserService,
  ) {}

  @Post()
  async subscribe(@Req() req, @Body() body: CreateSubscriptionDto) { 
    const { username } = req.user; 
    const user = await this.userService.findUserByUsername(username);

    if (user.age < 18 && body.plan !== 'Kids') {
      throw new UnauthorizedException('Only Kids pack allowed for users below 18');
    } else if (user.age >= 18 && !['Basic', 'Premium'].includes(body.plan)) {
      throw new UnauthorizedException('Invalid subscription plan');
    }

    return this.subscriptionService.createSubscription(body);
  }
}
