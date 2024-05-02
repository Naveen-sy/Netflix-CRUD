
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSubscriptionDto } from '../dto/create-subscription.dto';
import { UpdateSubscriptionDto } from '../dto/update-subscription.dto';
import { Subscription } from '../interfaces/subscription.interface';

@Injectable()
export class SubscriptionService {
  constructor(@InjectModel('Subscription') private readonly subscriptionModel: Model<Subscription>) {}

  async createSubscription(createSubscriptionDto: CreateSubscriptionDto): Promise<Subscription> {
    const newSubscription = new this.subscriptionModel(createSubscriptionDto);
    return newSubscription.save();
  }

  async getAllSubscriptions(): Promise<Subscription[]> {
    return this.subscriptionModel.find().exec();
  }

  async getSubscriptionById(id: string): Promise<Subscription> {
    return this.subscriptionModel.findById(id).exec();
  }

  async updateSubscription(id: string, updateSubscriptionDto: UpdateSubscriptionDto): Promise<Subscription> {
    return this.subscriptionModel.findByIdAndUpdate(id, updateSubscriptionDto, { new: true }).exec();
  }

  async deleteSubscription(id: string): Promise<Subscription> {
    return this.subscriptionModel.findByIdAndDelete(id).exec();
  }
}
