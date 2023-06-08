import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const configuration: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  database: 'postgres',
  username: 'postgres',
  password: 'postgres',
  port: 5432,
  synchronize: true,
  entities: ['dist/**/*.entity.{ts,js}'],
};
