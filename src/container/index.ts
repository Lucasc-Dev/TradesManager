import { container } from 'tsyringe';

import UsersRepository from '../repositories/implementations/UsersRepository';
import IUsersRepository from '../repositories/models/IUsersRepository';

import TradesRepository from '../repositories/implementations/TradesRepository';
import ITradesRepository from '../repositories/models/ITradesRepository';

container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    UsersRepository,
);

container.registerSingleton<ITradesRepository>(
    'TradesRepository',
    TradesRepository,
);

