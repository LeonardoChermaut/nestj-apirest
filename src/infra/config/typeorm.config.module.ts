import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configuration as TypeOrmConfiguration } from './typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(TypeOrmConfiguration)],
})
export class TypeOrmConfigurationModule {}
