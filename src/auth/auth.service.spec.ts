import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UserService } from '../services/user.service';

describe('AuthService', () => {
  let service: AuthService;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UserService,
          useValue: {
            findUserByUsername: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return token on successful login', async () => {
    const username = 'testuser';
    const password = 'password';
    const user = { username, password, id: '1' } as any;

    jest.spyOn(userService, 'findUserByUsername').mockResolvedValue(user);
    jest.spyOn(service['jwtService'], 'sign').mockReturnValue('testtoken');

    expect(await service.login(username, password)).toBe('testtoken');
  });


});
