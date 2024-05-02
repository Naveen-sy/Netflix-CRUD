import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../dto/create-user.dto'; 

describe('AuthController', () => {
  let controller: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call authService.register', async () => {
    const createUserDto: CreateUserDto = { 
      username: 'testuser',
      password: 'password',
      email: 'test@example.com', 
      age: 25,
      language: 'English', 
    };
    const result = 'User registered successfully';

    jest.spyOn(authService, 'register').mockResolvedValue(result);

    expect(await controller.register(createUserDto)).toBe(result);
  });


});
